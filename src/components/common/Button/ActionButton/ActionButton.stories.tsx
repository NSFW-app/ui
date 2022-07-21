import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { ComponentProps } from '@stitches/react'
import ActionButton from '.'

interface TemplateProps extends ComponentProps<typeof ActionButton> {
  fullWidth: boolean
}

const Template: Story<TemplateProps> = ({ fullWidth, ...args }) => (
  <StoryWrapper css={{ width: fullWidth ? '100%' : '400px' }}>
    <ActionButton {...args} />
  </StoryWrapper>
)

export default {
  title: 'Common/Button/ActionButton',
  component: Template,
  argTypes: {
    fullWidth: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Subscriptions',
    },
    subtitle: {
      control: {
        type: 'text',
      },
      defaultValue: '5',
    },
  },
} as Meta

export const Default = Template.bind({})
