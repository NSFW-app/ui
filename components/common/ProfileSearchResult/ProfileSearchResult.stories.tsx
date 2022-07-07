import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ProfileSearchResult } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { mockProfile } from 'common/UserCard/UserCard.stories'
import { Profile } from 'models/Profile'

const Template: Story = () => {
  return (
    <StoryWrapper css={{ maxWidth: '520px' }}>
      <ProfileSearchResult profile={mockProfile} />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/ProfileSearchResult',
  component: Template,
} as Meta

export const Default = Template.bind({})
