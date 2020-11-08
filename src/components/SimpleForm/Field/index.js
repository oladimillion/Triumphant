import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useField } from '../hooks'
import { 
  FlexBox, 
  Radio,
  RadioArray: BaseRadioArray,
  Select,
  TextArea,
  TextInput,
  UnsupportedField,
  ErrorMessage,
  Label
} from '../Components'

const RadioArray = ({ name, value, options, ...rest }) => (
  <BaseRadioArray name={name} value={value} {...rest}>
    {options.map(({ label, value }, index) => (
      <BaseRadioArray.Item key={index} label={label} value={value} />
    ))}
  </BaseRadioArray>
)

RadioArray.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
} 

const InputTypes = {
  text: TextInput,
  textarea: TextArea,
  select: Select,
  checkbox: Radio,
  radio: RadioArray,
  email: (props) => <TextInput {...props} type='email' />,
  url: (props) => <TextInput {...props} type='url' />,
  password: (props) => <TextInput {...props} type='password' />,
  file: (props) => <TextInput {...props} type='file' />
}

const Field = (props) => {

  const { label, type, Component: CustomField, ...rest } = props

  const {
    error,
    value,
    onChange
  } = useField(props.name)

  const handleChange = useCallback(({ target }, val) => {
    console.log(val)
    const { name, value } = target
    return onChange({ name, target })
  }, [])

  const FieldComponent = useCallback(() => {
    const Component = CustomField || InputTypes[type] || UnsupportedField
    return () =>  (
      <Component 
        {...rest} 
        type={type}
        error={!!error} 
        value={value} 
        onChange={handleChange} 
      />
    )
  }, [])

  return (
    <FlexBox flexDirection='column'>
      <Label>{label}</Label>
      <FieldComponent />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FlexBox>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  Component: PropTypes.elementType,
}

