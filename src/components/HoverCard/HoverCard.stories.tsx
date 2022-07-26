import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardArrow,
} from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'primitives/Button'
// TODO re-enable
// import { Avatar } from 'components/Avatar'
// import avatarSample from 'public/images/avatar_sample.png'

interface TemplateProps extends ComponentProps<typeof HoverCard> {
  showArrowTrigger: boolean
}

const Template: Story<TemplateProps> = ({ showArrowTrigger, ...args }) => (
  <StoryWrapper
    css={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <HoverCard {...args}>
      <HoverCardTrigger>
        <Button>Trigger</Button>
        {/* <Avatar src={avatarSample} /> */}
      </HoverCardTrigger>
      <HoverCardContent>
        {showArrowTrigger && <HoverCardArrow />}
        Hover content
      </HoverCardContent>
    </HoverCard>
  </StoryWrapper>
)

export default {
  title: 'Components/HoverCard',
  component: Template,
  argTypes: {
    showArrowTrigger: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Default = Template.bind({})
