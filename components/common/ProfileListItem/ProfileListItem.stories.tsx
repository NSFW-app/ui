import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ProfileListItem, ProfileListItemProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { mockProfile } from 'common/UserCard/UserCard.stories'

const DefaultTemplate: Story<ProfileListItemProps> = () => {
  return (
    <StoryWrapper css={{ maxWidth: '320px' }}>
      <ProfileListItem profile={mockProfile} />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/ProfileListItem',
  component: DefaultTemplate,
} as Meta

export const Template = DefaultTemplate.bind({})
