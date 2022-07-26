import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SearchField, SearchFieldProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends SearchFieldProps {
  errorMsg: string
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({
  fullWidth,
  errorMsg,
  error,
  disabled,
  loading,
}) => (
  <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
    <SearchField
      error={error && (errorMsg || error)}
      placeholder='Double pen'
      disabled={disabled}
      loading={loading}
    />
  </StoryWrapper>
)

export default {
  title: 'Components/Inputs/SearchField',
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
    loading: {
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
