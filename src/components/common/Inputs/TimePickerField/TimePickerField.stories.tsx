import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TimePickerField, TimePickerFieldProps } from './index'
import { useForm } from 'react-hook-form'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends Omit<TimePickerFieldProps, 'name'> {
  errorMsg?: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  error,
  errorMsg,
  fullWidth,
  ...args
}) => {
  const { control } = useForm({
    defaultValues: {
      timeInput: '12:00',
    },
  })

  return (
    <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
      <TimePickerField
        error={error && (errorMsg || error)}
        {...args}
        name='timeInput'
        control={control}
      />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Inputs/TimePickerField',
  component: Template,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: '',
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

export const Format24HR = Template.bind({})
Format24HR.args = {
  use24h: true,
}

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
