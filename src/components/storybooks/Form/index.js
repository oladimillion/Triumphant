import React from 'react'
import { SimpleForm, Field, Button } from '../../SimpleForm'


const validationRules = {
  text: {
    validations: 'required',
  },
  password: {
    validations: 'required|min:3',
  },
  url: {
    validations: 'url',
  },
  email: {
    validations: 'email',
  },
}

export const Form = () => {

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <SimpleForm 
      onSubmit={onSubmit}
      validationRules={validationRules}
    >
      <Field type='text' label='Text Field' name='text' />
      <Field type='password' label='Password Field' name='password' />
      <Field type='url' label='Url Field' name='url' />
      <Field type='email' label='Email Field' name='email' />
      <Field type='file' label='Field Field' name='file' />
      <Button type='submit' primary>Save</Button>
    </SimpleForm>
  )
}

