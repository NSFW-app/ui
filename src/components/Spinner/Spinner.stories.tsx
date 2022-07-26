import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Spinner } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  return (
    <StoryWrapper>
      <Spinner />
    </StoryWrapper>
  )
}

export default {
  title: 'Components/Spinner',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {}
