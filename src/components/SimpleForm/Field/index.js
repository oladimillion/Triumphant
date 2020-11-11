import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import { useField } from '../hooks'
import { 
  FlexBox, 
  Radio,
  Select,
  TextArea,
  TextInput,
  Unsupported,
  ErrorMessage,
  Label
} from '../Components'
import { RadioArray } from './Components/RadioArray'

const InputTypes = {
  text: TextInput,
  textarea: TextArea,
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
  radioArray: RadioArray,
  email: (props) => <TextInput {...props} type='email' />,
  url: (props) => <TextInput {...props} type='url' />,
  password: (props) => <TextInput {...props} type='password' />,
  file: (props) => <TextInput {...props} type='file' />,
  number: (props) => <TextInput {...props} type='number' />,
}

export const Field = (props) => {

  const { label, type, Component: CustomField, ...rest } = props

  const {
    error,
    value,
    handleChange,
  } = useField(props.name)

  const FieldComponent = useCallback(() => {
    const Component = CustomField || InputTypes[type] || Unsupported
    return (
      <Component 
        {...rest} 
        type={type}
        error={!!error} 
        value={value} 
        onChange={handleChange} 
        label={label}
      />
    )
  }, [])

  return (
    <FlexBox flexDirection='column'>
      {label && <Label>{label}</Label>}
      <FieldComponent />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FlexBox>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  Component: PropTypes.node,
}

