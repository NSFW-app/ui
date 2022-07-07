import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { InputActionField } from '.'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'utils'
import { TextFieldInput } from 'common/Inputs/TextField/TextFieldInput'
import { Flex } from 'primitives/Flex'
import { InputActionIcon } from './InputActionIcon'

interface TemplateProps extends ComponentProps<typeof TextFieldInput> {
  errorMsg: string
  fullWidth: boolean
  iconPosition: 'left' | 'right'
}

const Template: Story<TemplateProps> = ({
  fullWidth,
  iconPosition,
  error,
  disabled,
}) => (
  <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
    <InputActionField error={!!error} iconPosition={iconPosition}>
      <Flex css={{ width: '100%' }}>
        <TextFieldInput
          disabled={disabled}
          error={hasStringValue(error) ? 'message' : !!error}
        />
        <InputActionIcon
          disabled={disabled}
          error={hasStringValue(error) ? 'message' : !!error}
          icon='Email'
          iconPosition={iconPosition}
        />
      </Flex>
    </InputActionField>
  </StoryWrapper>
)

export default {
  title: 'Common/Inputs/InputActionField',
  component: Template,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
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
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['right', 'left'],
      defaultValue: 'right',
    },
  },
} as Meta

export const Default = Template.bind({})
