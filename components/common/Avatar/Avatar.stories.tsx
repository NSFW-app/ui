import React from 'react'
import { Story, Meta } from '@storybook/react'
import avatarSample from 'public/static/images/avatar_sample.png'
import { Avatar, AvatarProps } from '.'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends AvatarProps {}

const Template: Story<TemplateProps> = ({ status, size, src }) => (
  <StoryWrapper css={{ display: 'inline-block' }}>
    <Avatar src={src} alt='Kate Leslie' status={status} size={size} />
  </StoryWrapper>
)

export default {
  title: 'Common/Avatar',
  component: Template,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xxsmall', 'xsmall', 'small', 'medium', 'large'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['active', 'inactive'],
      },
    },
  },
} as Meta

export const Active = Template.bind({})
Active.args = {
  src: avatarSample,
}

export const Inactive = Template.bind({})
Inactive.args = {
  status: 'inactive',
  src: avatarSample,
}

export const XxSmall = Template.bind({})
XxSmall.args = {
  size: 'xxsmall',
  src: avatarSample,
}

export const XSmall = Template.bind({})
XSmall.args = {
  size: 'xsmall',
  src: avatarSample,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  src: avatarSample,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  src: avatarSample,
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  src: avatarSample,
}

export const XxSmallNoSrc = Template.bind({})
XxSmallNoSrc.args = {
  size: 'xxsmall',
}

export const XSmallNoSrc = Template.bind({})
XSmallNoSrc.args = {
  size: 'xsmall',
}

export const SmallNoSrc = Template.bind({})
SmallNoSrc.args = {
  size: 'small',
}

export const MediumNoSrc = Template.bind({})
MediumNoSrc.args = {
  size: 'medium',
}

export const LargeNoSrc = Template.bind({})
LargeNoSrc.args = {
  size: 'large',
}
