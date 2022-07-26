import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MoneyField, MoneyFieldProps } from './index'
import { useForm } from 'react-hook-form'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends MoneyFieldProps {
  errorMsg?: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  error,
  errorMsg,
  fullWidth,
  ...args
}) => {
  const { control, watch } = useForm()
  watch('money')

  return (
    <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
      <MoneyField
        error={error && (errorMsg || error)}
        {...args}
        control={control}
      />
    </StoryWrapper>
  )
}

export default {
  title: 'Components/Inputs/MoneyField',
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

export const CustomCurrency = Template.bind({})
CustomCurrency.args = {
  prefix: '£',
  currency: 'GBP',
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
