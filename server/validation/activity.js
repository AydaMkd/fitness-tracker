const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateActivityInput = data => {
   let errors = {};

   let {  description, duration } = data;
   // Converting empty fields to empty string as validator function works only with strings
   description = !isEmpty(data.description) ? data.description : "";
   duration= !isEmpty(data.duration) ? data.duration : "";
  
   if (Validator.isEmpty(data.description)) {
      errors.description = "Description is required";
   }
   if (Validator.isEmpty(data.duration)) {
      errors.duration = "Duration is required";
   }


   return {
      errors,
      isValid: isEmpty(errors)
   };
};