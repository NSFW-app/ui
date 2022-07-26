import React from 'react'
import { Meta, Story } from '@storybook/react'
import { NoAssetFallback, NoAssetFallbackProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story<NoAssetFallbackProps> = () => {
  return (
    <StoryWrapper css={{ maxWidth: '475px' }}>
      <NoAssetFallback />
    </StoryWrapper>
  )
}
export default {
  title: 'Components/NoAssetFallback',
  component: Template,
} as Meta

export const Example = Template.bind({})
