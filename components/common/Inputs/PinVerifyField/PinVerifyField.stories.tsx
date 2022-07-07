import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { DarkModeProp } from 'interfaces/index'
import { StoryWrapper } from 'components/StoryWrapper'
import { PinVerifyField, PinVerifyFieldProps } from './index'

interface TemplateProps extends PinVerifyFieldProps, DarkModeProp {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  type,
  fullWidth,
  darkMode,
  error,
  errorMsg,
  ...args
}) => {
  const { control, watch } = useForm()

  watch('birthdate')

  return (
    <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
      <PinVerifyField
        type={type}
        error={error && (errorMsg || error)}
        {...args}
        control={control}
      />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Inputs/PinVerifyField',
  component: Template,
  argTypes: {
    disabled: {
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
