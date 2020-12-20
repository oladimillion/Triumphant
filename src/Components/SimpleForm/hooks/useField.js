import React from 'react'
import { FormContext } from '../Context'

export const useField = (fieldName) => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
    handleChange,
    formValidationRules,
  } = React.useContext(FormContext)

  const fieldValidationRules = formValidationRules[fieldName] || ''
  const required = fieldValidationRules.includes('required')
  const value = values[fieldName]

  return {
    value,
    error: errors[fieldName],
    onChange: handleChange,
    setValue: (value) => setFieldValue(fieldName, value),
    setError: (error) => setFieldError(fieldName, error),
    onBlur: () => setFieldValue(fieldName, value),
    handleChange,
    fieldValidationRules, 
    required,
  }
}

