import React from 'react'
import { Story, Meta } from '@storybook/react'
import { EmailField, EmailFieldProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends EmailFieldProps {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  fullWidth,
  errorMsg,
  error,
  disabled,
}) => (
  <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
    <EmailField
      error={error && (errorMsg || error)}
      placeholder='Email'
      disabled={disabled}
    />
  </StoryWrapper>
)

export default {
  title: 'Components/Inputs/EmailField',
  component: Template,
  argTypes: {
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
