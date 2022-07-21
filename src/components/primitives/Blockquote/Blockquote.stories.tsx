import React from 'react'
import { Meta } from '@storybook/react'
import { Blockquote } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template = () => (
  <StoryWrapper>
    <Blockquote>
      I am a deep and meaningful blockquote. A peacock that rests on his tail
      feathers is just another turkey.
    </Blockquote>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Blockquote',
  component: Template,
} as Meta

export const Default = Template.bind({})
