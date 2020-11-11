import React from 'react'
import styled from 'styled-components'
import check from "check-types";
import Validator from "validatorjs";
import { FormContext } from '../Context'
import { buildValidationRules } from '../helpers/buildValidationRules'
import { buildValidationMessage, buildValidationMessages } from '../helpers/buildValidationMessages'

const Form = styled.form``

const SimpleForm = (props) => {

  const { 
    children, 
    initialValues,
    validationRules,
    render,
    ...rest
  } = props

  const composedValidationRules = buildValidationRules(validationRules)
  const { values, setValues } = React.useState(initialValues)
  const { errors, setErrors } = React.useState({})
  const { submitting, setSubmitting } = React.useState(false)

  const setFieldError = (fieldName, fieldError) => {
    setErrors({ ...errors, [fieldName]: fieldError })
  }

  const resetForm = () => {
    setValues({})
    setErrors({})
    setSubmitting(false)
  }

  const setFieldValue = (fieldName, fieldValue) => {
    if (!check.emptyObject(validationRules)) {
      const validator = new Validator(
        { [fieldName]: fieldValue }, 
        { [fieldName]: composedValidationRules[fieldName] },
        buildValidationMessage(fieldName, validationRules[fieldName].message),
      );
      validator.fails(); 
      setFieldError(fieldName, validator.errors.get(fieldName))
    }
    setValues({ ...values, [fieldName]: fieldValue })
  }

  const handleSubmit = (event) => {
    event?.preventDefault()

    let fails = false

    if (!check.emptyObject(validationRules)) {
      const validator = new Validator(
        values,
        composedValidationRules,
        buildValidationMessages(validationRules),
      );
      fails = validator.fails();
      setErrors(validator.errors.all())
    }

    if (check.emptyObject(validationRules) || !fails) {
      onSubmit({ values, submitting });
    }
  }

  const handleChange = React.useCallback((e, val) => {
    console.log(val)
    const { name, value } = e.target
    setFieldValue(name, value)
  }, [])

  const contextValue = {
    setFieldValue,
    setFieldError,
    setSubmitting,
    resetForm,
    submitting,
    dirty: !!Object.keys(errors).length,
    values,
    errors,
    handleSubmit,
    handleChange,
  }

  const renderChildren = () => {
    if (check.function(children)) {
      return children(contextValue)
    } else if (check.function(render)) {
      return render(contextValue)
    }
    return children
  }

  return (
    <FormContext.Provider
      value={contextValue}
    >
      <Form {...rest} onSubmit={handleSubmit}>
        {renderChildren()}
      </Form>
    </FormContext.Provider>
  )
}

SimpleForm.defaultProps = {
  validationRules: {},
  initialValues: {},
}

SimpleForm.propTypes = {
  validationRules: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
}


