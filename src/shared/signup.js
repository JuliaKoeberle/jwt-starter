import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    if(Validator.isEmpty(data.username)){
        errors.username = 'Username required';
    }

  if(Validator.isEmpty(data.email)){
    errors.email = 'Email is required';
  }    
  return {errors: errors, isValid: isEmpty(errors)};

}