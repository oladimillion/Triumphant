import React from 'react'
import { FormContext } from '../Context'

export const useField = (fieldName) => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
    handleChange,
  } = React.useContext(FormContext)

  return {
    value: values[fieldName],
    error: errors[fieldName],
    onChange: handleChange,
    setValue: (value) => setFieldValue(fieldName, value),
    setError: (error) => setFieldError(fieldName, error),
    handleChange,
  }
}

