import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import { isEmptyValue } from '../helpers'
import { useField } from '../hooks'
import { 
  Text,
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
  number: (props) => <TextInput {...props} type='text' />,
}

export const Field = (props) => {

  const { label, type, Component: CustomField, ...rest } = props

  const {
    error,
    value,
    onChange,
    onBlur,
    required,
  } = useField(props.name)

  const Component = CustomField || InputTypes[type] || Unsupported

  const FieldComponent = React.useCallback((props) => <Component  {...props} />, [])

  return (
    <FlexBox flexDirection='column' my={3}>
      <FlexBox mb={2}>
        {label && <Label>{label}</Label>}
        {required && <Required as='span'>*</Required>}
      </FlexBox>
      <FieldComponent 
        {...rest} 
        type={type}
        onChange={onChange} 
        onBlur={onBlur} 
        error={!isEmptyValue(error)} 
        value={value || ''} 
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FlexBox>
  )
}

const Required = styled(Text)`
  font-size: 1.3rem;
  color: #9f3a38;
`

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Component: PropTypes.node,
}

