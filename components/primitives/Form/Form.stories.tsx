import React from 'react'
import { Meta } from '@storybook/react'
import { Form } from './index'
import { TextField } from 'common/Inputs/TextField'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'common/Button'
import { EmailField } from 'common/Inputs/EmailField'
import { PasswordField } from 'common/Inputs/PasswordField'

const Template = () => (
  <StoryWrapper>
    <Form
      css={{
        width: '100%',
        maxWidth: '375px',
      }}
    >
      <EmailField placeholder='Email' />
      <PasswordField placeholder='Password' />
      <PasswordField placeholder='Confirm password' />
      <Button theme='primary' css={{ margin: '12px 0 8px 0' }}>
        CONTINUE
      </Button>
      <Button theme='secondary' css={{ margin: '8px 0 16px 0' }}>
        BACK
      </Button>
    </Form>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Form',
  component: Template,
} as Meta

export const Example = Template.bind({})
