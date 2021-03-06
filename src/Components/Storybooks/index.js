import React from 'react'
import styled from 'styled-components'
import { Divider, Header, Checkbox, Segment } from 'semantic-ui-react'
import { Button } from '../SimpleForm/Components/Button'
import { TextInput } from '../SimpleForm/Components/TextInput'
import { TextArea } from '../SimpleForm/Components/TextArea'
import { Select } from '../SimpleForm/Components/Select'
import { Container } from './Container'
import { RadioArray, Radio } from '../SimpleForm/Components/Radio'
import { FlexBox } from '../SimpleForm/Components/FlexBox'
import { Text } from '../SimpleForm/Components/Text'
import { Form } from './Form'
import { countries } from './consts'

export const StoryBooks = () => {
  return (
    <Container p={20}>
      <Segment>
        <Header as='h3'>Buttons</Header>
        <Button>Click me</Button>
        <Divider />
        <Button basic icon="stop" content="Click me" />
        <Divider />
        <Button basic loading color="blue">Click me</Button>
      </Segment>

      <Segment>
        <Header as='h3'>TextInputs</Header>
        <TextInput />
        <Divider />
        <TextInput placeholder='Search...'/>
        <Divider />
        <TextInput error placeholder='Search...'/>
      </Segment>

      <Segment>
        <Header as='h3'>FileInputs</Header>
        <TextInput type='file' />
        <Divider />
        <TextInput error type='file' multiple />
      </Segment>

      <Segment>
        <Header as='h3'>PasswordInputs</Header>
        <TextInput type='password' placeholder='**********' />
        <Divider />
        <TextInput error type='password' placeholder='**********' />
      </Segment>

      <Segment>
        <Header as='h3'>DateInputs</Header>
        <TextInput type='date' placeholder='YYYY/MM/DD' />
        <Divider />
        <TextInput error type='date' />
      </Segment>

      <Segment>
        <Header as='h3'>TextAreas</Header>
        <TextArea />
        <Divider />
        <TextArea placeholder='Type something...' />
        <Divider />
        <TextArea error placeholder='Type something...' />
      </Segment>

      <Segment>
        <Header as='h3'>Selects</Header>
        <Select options={countries} />
        <Divider />
        <Select options={countries} placeholder='Select your country' />
        <Divider />
        <Select options={countries} error placeholder='Select your country' />
      </Segment>

      <Segment>
        <Header as='h3'>Checkboxes</Header>
        <Checkbox label='Checkbox' />
        <Divider />
        <Checkbox label='Checkbox' disabled />
      </Segment>

      <Segment>
        <Header as='h3'>Radio</Header>
        <Radio label='Radio' />
      </Segment>

      <Segment>
        <Header as='h3'>RadioArray</Header>
        <RadioArray name='radio' value='this'>
          <RadioArray.Item text='This label' value='this' />
          <RadioArray.Item text='That label' value='that' />
          <RadioArray.Item text='Them label' value='them' />
        </RadioArray>
        <Divider />
        <RadioArray name='select' value={true}>
          <RadioArray.Item text='Yes' value={false} />
          <RadioArray.Item text='No' value={true} />
        </RadioArray>
      </Segment>

      <Segment>
        <Header as='h3'>FlexBox</Header>
        <FlexBox>
          <Div>Item</Div>
          <Div>Item</Div>
          <Div>Item</Div>
          <Div>Item</Div>
        </FlexBox>
        <Divider />
        <FlexBox flexDirection='column'>
          <Div>Item</Div>
          <Div>Item</Div>
          <Div>Item</Div>
          <Div>Item</Div>
        </FlexBox>
      </Segment>

      <Segment>
        <Header as='h3'>Text</Header>
        <Text as='span'>span tag</Text>
        <Divider />
        <Text>p tag</Text>
        <Divider />
        <Text as='i'>i tag</Text>
        <Divider />
        <Text as='label'>label tag</Text>
      </Segment>

      <Segment>
        <Header as='h3'>Form</Header>
        <Form />
      </Segment>

    </Container>
  )
}

const Div = styled.div`
  margin: 4px;
`

export { StoryBooks as default }
