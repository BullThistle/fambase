import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from 'semantic-ui-react';

const FormFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  // info,
  onChange,
}) => (
  <Form.Field>
    <label htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
    {error && (
      <Label basic color="red" pointing>
        {error}
      </Label>
    )}
  </Form.Field>
);

FormFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  // info: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormFieldGroup;
