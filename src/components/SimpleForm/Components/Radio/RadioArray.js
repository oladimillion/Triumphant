import React from 'react'
import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Form, Radio as UIRadio } from 'semantic-ui-react'
import PropTypes from 'prop-types'


const RadioContext = React.createContext({
  value: null,
  onChange: () => {},
})

const RadioComponent = (props) => {
  const { 
    children,
    onChange, 
    name, 
    disabled, 
    value: fieldValue, 
    ...rest
  } = props

  const [value, setValue] = React.useState(fieldValue)

  return (
    <RadioContext.Provider 
      value={{
        value,
        name,
        disabled,
        setValue,
        onChange: (value) => {
          setValue(value)
          onChange({
            target: {
              name: props.name,
              value,
            }
          })
        }
      }}
    >
      <Form {...rest} >
        {children}
      </Form>
    </RadioContext.Provider>
  )
}

RadioComponent.defaultProps = {
  onChange: () => {},
  children: null,
  value: null,
  name: null,
}

const RadioComponentItem = (props) => {
  const { value, name, onChange, disabled } = React.useContext(RadioContext)
  const { Component, value: fieldValue, label, ...rest } = props
  const dataProps = {
    checked: fieldValue === value,
    onChange: () => onChange(fieldValue),
    label,
    name,
    disabled,
  }
  return (
    <Form.Field {...rest}>
      {
        Component ? 
          <Component {...dataProps} /> :
          <UIRadio {...dataProps} />
      }
    </Form.Field>
  )
}

RadioComponentItem.defaultProps = {
  value: null,
  label: null,
  Component: null,
}

RadioComponentItem.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string.isRequired,
  Component: PropTypes.any,
}

export const RadioArray = styled(RadioComponent)
  .attrs(() => ({
    className: 'RadioArray',
  }))``

RadioArray.Item = RadioComponentItem

RadioArray.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
}

RadioArray.displayName = 'RadioArray'
hoistNonReactStatics(RadioArray, RadioComponent)


