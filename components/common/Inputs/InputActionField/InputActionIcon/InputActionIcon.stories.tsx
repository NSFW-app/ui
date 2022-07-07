import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { hasStringValue } from 'lib/helpers'
import { Label } from 'primitives/Label'
import { Flex } from 'primitives/Flex'
import { Send as SendIcon } from 'common/Icon'
import { InputActionIcon, InputActionIconProps } from '.'

const Template: Story<InputActionIconProps> = ({
  error,
  disabled,
  iconPosition,
  ...args
}) => (
  <StoryWrapper>
    <Flex>
      <Label>{`Icon for an input with an optional onClick "action"`}</Label>
    </Flex>
    <Flex>
      <InputActionIcon
        error={hasStringValue(error) ? 'message' : !!error}
        disabled={disabled}
        iconPosition={iconPosition}
        {...args}
      >
        <SendIcon />
      </InputActionIcon>
    </Flex>
  </StoryWrapper>
)

export default {
  title: 'Common/Inputs/InputActionField/InputActionIcon',
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
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['right', 'left'],
      defaultValue: 'right',
    },
    onClick: () => null,
  },
} as Meta

export const Default = Template.bind({})
