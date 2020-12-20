import React from 'react'
import { SimpleForm, Field, Action, FieldArray } from '../../SimpleForm'


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
      <Field type='test' label='Unsupported' name='test' />
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      <Field type='password' label='Password Field' name='password' />
      <Field type='url' label='Url Field' name='url' />
      <Field type='email' label='Email Field' name='email' />
      <Field type='file' label='File Field' name='file' />
      <Field type='file' label='Multi-File Field' name='file_multiple' multiple />
      <FieldArray name='fieldArray' label='Field Array'>
        {({ value, add, remove }) => (
          <FieldArray.Item mb={2}>
            {value.map((_, index) => (
              <FieldArray.Item key={index}>
                <FieldArray.RemoveButton onClick={() => remove(index)} />
                <Field type='textarea' label='TextArea Field' name={`fieldArray.textarea.${index}`} />
                <Field type='number' label='Number Field' name={`fieldArray.number.${index}`} />
                <FieldArray.Divider />
              </FieldArray.Item>
            ))}
            <FieldArray.AddButton onClick={add} />
          </FieldArray.Item>
        )}
      </FieldArray>
      <Field type='number' label='Number Field' name='number' />
      <Action primary>Save</Action>
    </SimpleForm>
  )
}

