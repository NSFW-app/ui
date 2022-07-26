import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DateTimeField, DateTimeFieldProps } from './index'
import { useForm } from 'react-hook-form'
import subYears from 'date-fns/subYears'
import { DarkModeProp } from 'core/types'
import { StoryWrapper } from 'components/StoryWrapper'
import { Form } from 'primitives/Form'

interface TemplateProps extends DateTimeFieldProps, DarkModeProp {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  darkMode,
  fullWidth,
  error,
  errorMsg,
  ...args
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      dateTime: subYears(new Date(), 10),
    },
  })

  return (
    <StoryWrapper css={{ width: fullWidth ? '100%' : '340px' }}>
      <Form onSubmit={handleSubmit((rawr) => console.log(rawr))}>
        <DateTimeField
          error={error && (errorMsg || error)}
          {...args}
          control={control}
        />
      </Form>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/Inputs/DateTimeField',
  component: Template,
  argTypes: {
    fullWidth: {
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
