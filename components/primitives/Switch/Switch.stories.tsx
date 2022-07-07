import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import { StyledSwitch, StyledThumb } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends ComponentProps<typeof StyledSwitch> {
  checked?: boolean
  disabled?: boolean
}
const Template: Story<TemplateProps> = ({ ...args }) => (
  <StoryWrapper>
    <StyledSwitch {...args}>
      <StyledThumb {...args} />
    </StyledSwitch>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Switch',
  component: Template,
  argTypes: {
    onCheckedChange: { action: 'onCheckedChange' },
    //If default value for 'checked' is set, the switch can not be clicked anymore inside the storyboard
    checked: {
      control: {
        type: 'boolean',
      },
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
