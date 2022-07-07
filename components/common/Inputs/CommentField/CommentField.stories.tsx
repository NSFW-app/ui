import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DarkModeProp } from 'interfaces/index'
import { StoryWrapper } from 'components/StoryWrapper'
import { CommentField, CommentFieldProps } from './index'

interface TemplateProps extends CommentFieldProps, DarkModeProp {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  darkMode,
  fullWidth,
  error,
  errorMsg,
  ...args
}) => (
  <StoryWrapper css={{ width: '500px' }}>
    <CommentField error={error && (errorMsg || error)} {...args} />
  </StoryWrapper>
)

export default {
  title: 'Common/Inputs/CommentField',
  component: Template,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Comment',
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
    onSend: {
      action: 'message',
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
