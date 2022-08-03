import React from 'react'
import { Meta } from '@storybook/react'

import { StoryWrapper } from 'components/StoryWrapper'
import { NetworkSelector } from 'components/NetworkSelector'

const DefaultTemplate = () => (
  <StoryWrapper>
    <NetworkSelector />
  </StoryWrapper>
)

export default {
  title: 'Primitives/Selector',
  component: DefaultTemplate,
} as Meta

export const Template = DefaultTemplate.bind({})
