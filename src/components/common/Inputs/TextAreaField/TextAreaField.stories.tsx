import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextAreaField, TextAreaFieldProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends TextAreaFieldProps {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({ errorMsg, error, ...args }) => (
  <StoryWrapper css={{ width: '400px' }}>
    <TextAreaField error={error && (errorMsg || error)} {...args} />
  </StoryWrapper>
)

export default {
  title: 'Common/Inputs/TextAreaField',
  component: Template,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Some Text',
    },
    rows: {
      control: {
        type: 'number',
      },
      defaultValue: 4,
    },
    resizable: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
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
  },
} as Meta

export const Default = Template.bind({})

export const Resizable = Template.bind({})
Resizable.args = {
  resizable: true,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  errorMsg: undefined,
}

export const ErrorWithMessage = Template.bind({})
ErrorWithMessage.args = {
  error: true,
  errorMsg: 'Example Error Message',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
