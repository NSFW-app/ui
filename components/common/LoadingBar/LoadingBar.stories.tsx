import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LoadingBar, LoadingBarProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const DefaultTemplate: Story<LoadingBarProps> = ({ percent }) => {
  return (
    <StoryWrapper css={{ maxWidth: '500px' }}>
      <LoadingBar percent={percent} />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/LoadingBar',
  component: DefaultTemplate,
  argTypes: {
    percent: {
      control: 'range',
    },
  },
} as Meta

export const Template = DefaultTemplate.bind({})
Template.args = {
  percent: 33,
}
