import React from 'react'
import { Meta } from '@storybook/react'
import { Span } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const DefaultTemplate = () => (
  <StoryWrapper>
    <Span>Text in a span</Span>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Span',
  component: DefaultTemplate,
} as Meta

export const Template = DefaultTemplate.bind({})
