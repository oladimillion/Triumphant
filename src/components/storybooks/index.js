import React from 'react'
import styled from 'styled-components'
import { Divider, Header, Checkbox, Segment } from 'semantic-ui-react'
import { Button } from '../FormSchema/Components/Button'
import { TextInput } from '../FormSchema/Components/TextInput'
import { TextArea } from '../FormSchema/Components/TextArea'
import { Select } from '../FormSchema/Components/Select'
import { Container } from './Container'
import { RadioArray, Radio } from '../FormSchema/Components/Radio'
import { FlexBox } from '../FormSchema/Components/FlexBox'
import { Text } from '../FormSchema/Components/Text'
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
          <RadioArray.Item label='This label' value='this' />
          <RadioArray.Item label='That label' value='that' />
          <RadioArray.Item label='Them label' value='them' />
        </RadioArray>
        <Divider />
        <RadioArray name='select' value={true}>
          <RadioArray.Item label='Yes' value={false} />
          <RadioArray.Item label='No' value={true} />
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
        <Header as='h3'>FlexBox</Header>
        <Text as='span'>span tag</Text>
        <Divider />
        <Text>p tag</Text>
        <Divider />
        <Text as='i'>i tag</Text>
        <Divider />
        <Text as='label'>label tag</Text>
      </Segment>

    </Container>
  )
}

const Div = styled.div`
  margin: 4px;
`



