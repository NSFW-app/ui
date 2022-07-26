import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PricePill } from './index'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  return (
    <StoryWrapper>
      <PricePill isVisible={true} handlePayment={() => {}} price={10}>
        Draft
      </PricePill>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/PricePill',
  component: Template,
} as Meta

export const Default = Template.bind({})
