import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MobileField, MobileFieldProps } from './index'
import { useForm } from 'react-hook-form'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends MobileFieldProps {
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

  watch('birthdate')

  return (
    <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
      <MobileField
        error={error && (errorMsg || error)}
        {...args}
        control={control}
      />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Inputs/MobileField',
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

const defaultArgs = {
  dropdownCss: {
    '@md': {
      top: '72px',
    },
  },
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
  error: false,
  errorMsg: undefined,
}

export const Error = Template.bind({})
Error.args = {
  ...defaultArgs,
  error: true,
  errorMsg: undefined,
}

export const ErrorWithMessage = Template.bind({})
ErrorWithMessage.args = {
  ...defaultArgs,
  error: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
}
