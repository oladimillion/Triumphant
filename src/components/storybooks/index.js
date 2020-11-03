import React from 'react'
import styled from 'styled-components'
import { Header, Checkbox, Segment } from 'semantic-ui-react'
import { Button } from './Button'
import { TextInput } from './TextInput'
import { TextArea } from './TextArea'
import { Select } from './Select'
import { Container } from './Container'
import { RadioArray, Radio } from './Radio'
import { countries } from './consts'

const Space = styled.div`
  width: 100%;
  height: 20px;
`

export const StoryBooks = () => {
  return (
    <Container p={20}>
      <Segment>
        <Header as='h3'>Buttons</Header>
        <Button>Click me</Button>
        <Space />
        <Button basic icon="stop" content="Click me" />
        <Space />
        <Button basic loading color="orange">Click me</Button>
      </Segment>

      <Segment>
        <Header as='h3'>TextInputs</Header>
        <TextInput />
        <Space />
        <TextInput placeholder='Search...'/>
        <Space />
        <TextInput error placeholder='Search...'/>
      </Segment>

      <Segment>
        <Header as='h3'>FileInputs</Header>
        <TextInput type='file' />
        <Space />
        <TextInput error type='file' multiple />
      </Segment>

      <Segment>
        <Header as='h3'>PasswordInputs</Header>
        <TextInput type='password' placeholder='**********' />
        <Space />
        <TextInput error type='password' placeholder='**********' />
      </Segment>

      <Segment>
        <Header as='h3'>DateInputs</Header>
        <TextInput type='date' placeholder='YYYY/MM/DD' />
        <Space />
        <TextInput error type='date' />
      </Segment>

      <Segment>
        <Header as='h3'>TextAreas</Header>
        <TextArea />
        <Space />
        <TextArea placeholder='Type something...' />
        <Space />
        <TextArea error placeholder='Type something...' />
      </Segment>

      <Segment>
        <Header as='h3'>Selects</Header>
        <Select options={countries} />
        <Space />
        <Select options={countries} placeholder='Select your country' />
        <Space />
        <Select options={countries} error placeholder='Select your country' />
      </Segment>

      <Segment>
        <Header as='h3'>Checkboxes</Header>
        <Checkbox label='Checkbox' />
        <Space />
        <Checkbox label='Checkbox' disabled />
      </Segment>

      <Segment>
        <Header as='h3'>Radio</Header>
        <Radio label='Radio' />
      </Segment>

      <Segment>
        <Header as='h3'>RadioArray</Header>
        <RadioArray name='radio' value='this'>
          <RadioArray.Item label='This label' value='this' />
          <RadioArray.Item label='That label' value='that' />
          <RadioArray.Item label='Them label' value='them' />
        </RadioArray>
        <Space />
        <RadioArray name='select' value={true}>
          <RadioArray.Item label='Yes' value={false} />
          <RadioArray.Item label='No' value={true} />
        </RadioArray>
      </Segment>

    </Container>
  )
}



