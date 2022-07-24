const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data){
      let errors = {};

      data.handle = validText(data.handle)? data.handle :'' ;
      data.email = validText(data.email)? data.email :'' ;
      data.password = validText(data.password)? data.password:'' ;
      data.password2 = validText(data.password2)? data.password2:'' ;

      if (!Validator.isLength(data.handle,{min:2,max:30})){
        errors.handle = "Handle must be 2 and 30 characters"
      }

      if(Validator.isEmpty(data.handle)){
        errors.handle = "handle field is required"
      }

      if(Validator.isEmpty(data.email)){
        errors.email = "email field is required"
      }

      if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid'
      }

      if(Validator.isEmpty(data.password)){
        errors.password ="password is required"
      }

      if (!Validator.isLength(data.password,{min:2,max:12})){
        errors.password = "Password must be 2 and 12 characters"
      }
     
      if(!Validator.equals(data.password,data.password2)){
        errors.password2 = 'Passwords must match'
      }

      return {
        errors,
        isValid: Object.keys(errors).length === 0
      }
}