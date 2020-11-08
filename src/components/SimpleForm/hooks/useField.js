import React from 'react'
import { FormContext } from '../Context'

export const useField = (fieldName) => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
  } = React.useContext(FormContext)

  return {
    value: values[fieldName],
    error: errors[fieldName],
    onChange: ({ target }) => setFieldValue(fieldName, target.value),
    setValue: (value) => setFieldValue(fieldName, value),
    setError: (error) => setFieldError(fieldName, error),
  }
}
