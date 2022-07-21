import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FeatureHighlight } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  return (
    <StoryWrapper css={{ width: '580px' }}>
      <FeatureHighlight>
        Browse NSFW posts completely anonymously.
      </FeatureHighlight>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/FeatureHighlight',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {}
