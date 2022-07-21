import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { ComponentProps } from '@stitches/react'

interface TemplateProps extends ComponentProps<typeof Button> {}

const Template: Story<TemplateProps> = ({ children = 'Label', ...args }) => (
  <StoryWrapper style={{ maxWidth: '400px', width: '100%' }}>
    <Button {...args}>{children}</Button>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Button',
  component: Template,
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    },
  },
} as Meta

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
}

export const RoundedPrimary = Template.bind({})
RoundedPrimary.args = {
  round: true,
  children: 'X',
}

export const RoundedSecondary = Template.bind({})
RoundedSecondary.args = {
  theme: 'secondary',
  round: true,
  children: 'X',
}
