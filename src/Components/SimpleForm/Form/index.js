import React from 'react'
import styled from 'styled-components'
import check from 'check-types';
import Validator from 'validatorjs';
import PropTypes from 'prop-types'
import { withErrorBoundary } from '../hoc'
import { isEmptyValue } from '../helpers/isEmptyValue'
import { FormContext } from '../Context'
import { buildValidationRules } from '../helpers/buildValidationRules'
import { 
  buildFieldValidationMessages, 
  buildFormValidationMessages, 
} from '../helpers/buildValidationMessages'
import { fieldTypes } from '../helpers/fieldTypes'

const Form = styled.form``

export const SimpleForm = withErrorBoundary((props) => {

  const { 
    children, 
    initialValues,
    validationRules,
    render,
    onSubmit,
    ...rest
  } = props

  const composedValidationRules = React.useMemo(() => {
    return buildValidationRules(validationRules)
  }, [validationRules])

  const [values, setValues] = React.useState(initialValues)
  const [errors, setErrors] = React.useState({})
  const [submitting, setSubmitting] = React.useState(false)

  const setFieldError = (fieldName, fieldError) => {
    setErrors({ ...errors, [fieldName]: fieldError })
  }

  const resetForm = () => {
    setValues({})
    setErrors({})
    setSubmitting(false)
  }

  const setFieldValue = (fieldName, fieldValue) => {
    const rules = validationRules[fieldName]
    const hasRules = !isEmptyValue(rules)
    const validationMessage = hasRules && rules.message
    if (hasRules) {
      const validator = new Validator(
        { [fieldName]: fieldValue }, 
        { [fieldName]: composedValidationRules[fieldName] },
        buildFieldValidationMessages(fieldName, validationMessage)
      )
      validator.fails()
      setFieldError(fieldName, validator.errors.get(fieldName))
    }
    setValues({ ...values, [fieldName]: fieldValue })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let fails = false

    if (!check.emptyObject(validationRules)) {
      const validator = new Validator(
        values,
        composedValidationRules,
        buildFormValidationMessages(validationRules),
      );
      fails = validator.fails();
      setErrors(validator.errors.all())
    }

    if (check.emptyObject(validationRules) || !fails) {
      try {
        setSubmitting(true)
        await onSubmit({ values, errors, submitting, resetForm })
      } finally {
        setSubmitting(false)
      }
    }
  }

  const handleChange = (e, props) => {
    const { name, value, files } = e.target
    const { type, multiple } = props
    if (type === fieldTypes.FILE && multiple) {
      setFieldValue(name, files)
    } else if (type === fieldTypes.FILE) {
      setFieldValue(name, files[0])
    } else {
      setFieldValue(name, value)
    }
  }

  const contextValue = {
    setFieldValue,
    setFieldError,
    setSubmitting,
    resetForm,
    submitting,
    dirty: !isEmptyValue(errors),
    values,
    errors,
    handleSubmit,
    handleChange,
    formValidationRules: composedValidationRules,
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
    <FormContext.Provider value={contextValue}>
      <Form {...rest} onSubmit={handleSubmit}>
        {renderChildren()}
      </Form>
    </FormContext.Provider>
  )
})

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


