import React from 'react'
import { Story, Meta } from '@storybook/react'
import { CommentBox, CommentBoxProps } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import avatarSample from 'public/static/images/avatar_sample.png'

const mockComment = {
  text: `Business impact. Churning anomalies i'm sorry i replied to your emails after only three weeks, but can the site go live tomorrow anyway? overcome key issues to meet key milestones curate increase the resolution, scale it up we need a larger print.`,
  createdAt: '121212',
  createdBy: 'dsdsdsdsd',
  commentId: '21212121',
  postId: '232312313123',
  post: {},
  author: {
    displayName: 'The pounder',
    username: 'the_pounder_69',
    avatar: {
      url: avatarSample,
    },
  },
}

const DefaultTemplate: Story<CommentBoxProps> = () => {
  return (
    <StoryWrapper css={{ maxWidth: '540px' }}>
      {/* @ts-ignore */}
      <CommentBox comment={mockComment} timeDistance='About 1 month ago' />
    </StoryWrapper>
  )
}

export default {
  title: 'Common/CommentBox',
  component: DefaultTemplate,
} as Meta

export const Templte = DefaultTemplate.bind({})
