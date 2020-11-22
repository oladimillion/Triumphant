import React from 'react'
import { SimpleForm, Field, Action } from '../../SimpleForm'


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
  file_multiple: {
    validations: 'required',
  },
  email: {
    validations: 'email',
  },
}

export const Form = () => {

  const onSubmit = async () => { }

  const initialValues = {
    email: 'test@email.com',
    file_multiple: ['https://google.com', 'https://wikipedia.com']
  }

  return (
    <SimpleForm 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
    >
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      <Field type='password' label='Password Field' name='password' />
      <Field type='url' label='Url Field' name='url' />
      <Field type='email' label='Email Field' name='email' />
      <Field type='file' label='File Field' name='file' />
      <Field type='file' label='Multi-File Field' name='file_multiple' multiple />
      <Field type='test' label='Unsupported' name='test' />
      <Action primary>Save</Action>
    </SimpleForm>
  )
}

