const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEventInput(data) {
  let errors = {};

  dataFields = ['what', 'where', 'when'];
  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';
    if (Validator.isEmpty(data[field])) {
      errors[field] = `${field} field is required`;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
