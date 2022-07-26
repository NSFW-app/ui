import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tag } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  return (
    <StoryWrapper>
      <Tag>Draft</Tag>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/Tag',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {}
