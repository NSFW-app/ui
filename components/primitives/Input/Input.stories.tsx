import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ComponentProps } from '@stitches/react'
import { DarkModeProp } from 'interfaces/index'
import { Input } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends DarkModeProp, ComponentProps<typeof Input> {}

const Template: Story<TemplateProps> = ({ ...args }) => (
  <StoryWrapper css={{ maxWidth: '400px', width: '100%' }}>
    <Input {...args} />
  </StoryWrapper>
)

export default {
  title: 'Primitives/Input',
  component: Template,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'password', 'number', 'email'],
    },
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Username',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Password',
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: 'Amount',
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'Email',
}
