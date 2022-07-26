import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends TextFieldProps {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  type,
  fullWidth,
  errorMsg,
  error,
  placeholder,
  disabled,
}) => (
  <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
    <TextField
      type={type}
      error={error && (errorMsg || error)}
      placeholder={placeholder}
      disabled={disabled}
    />
  </StoryWrapper>
)

export default {
  title: 'Components/Inputs/TextField',
  component: Template,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'number'],
      defaultValue: 'text',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Username',
    },
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    errorMsg: {
      control: {
        type: 'text',
      },
      defaultValue: "Something's gone wrong.",
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
  error: true,
  errorMsg: undefined,
}

export const ErrorWithMessage = Template.bind({})
ErrorWithMessage.args = {
  error: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
