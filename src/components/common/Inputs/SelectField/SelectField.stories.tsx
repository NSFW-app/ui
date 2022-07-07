import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SelectField, SelectFieldProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { useForm } from 'react-hook-form'

interface TemplateProps extends SelectFieldProps {
  errorMsg: string
}

const Template: Story<TemplateProps> = ({ errorMsg, error, ...args }) => {
  const { control } = useForm()

  return (
    <StoryWrapper css={{ width: '400px' }}>
      <SelectField
        error={error && (errorMsg || error)}
        {...args}
        control={control}
      />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Inputs/SelectField',
  component: Template,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
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
  },
} as Meta

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const Default = Template.bind({})
Default.args = {
  options,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  errorMsg: undefined,
  options,
}

export const ErrorWithMessage = Template.bind({})
ErrorWithMessage.args = {
  error: true,
  options,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  options,
}
