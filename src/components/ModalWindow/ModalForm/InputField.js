/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import MuiCheckbox from '@material-ui/core/Checkbox';

export function InputField(props) {
  const [field, meta] = useField(props);
  const { placeholder, name, type } = props;
  const { value, onChange, onBlur } = field;
  const { touched, error } = meta;

  const handleChange = (e) => {
    onChange(e);
    if (props.onChange) props.onChange(value);
  };

  const handleBlur = (e) => {
    onBlur(e);
    if (props.onBlur) props.onBlur(value);
  };

  return type === 'text' ? (
    <TextField
      color="primary"
      fullWidth="true"
      margin="dense"
      {...field}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched && Boolean(error)}
      helperText={touched && error}
    />
  ) : (
    <MuiCheckbox {...field} checked={field.value} color="primary" size="medium" />
  );
  // if (type === 'text') {
  //   return (
  //     <TextField
  //       color="primary"
  //       fullWidth="true"
  //       margin="dense"
  //       {...field}
  //       name={name}
  //       type={type}
  //       placeholder={placeholder}
  //       value={value}
  //       onChange={handleChange}
  //       onBlur={handleBlur}
  //       error={touched && Boolean(error)}
  //       helperText={touched && error}
  //     />
  //   );
  // }
  // <MuiCheckbox {...field} checked={field.value} color="primary" size="medium" />;
}
