import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import { Label } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends ComponentProps<typeof Label> {}

const Template: Story<TemplateProps> = ({ ...args }) => (
  <StoryWrapper css={{ maxWidth: '475px' }}>
    <Label {...args}>label</Label>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Label',
  component: Template,
} as Meta

export const Default = Template.bind({})

export const Capitalized = Template.bind({})
Capitalized.args = { capitalized: true }
