import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import {
  StyledHoverCard,
  StyledTrigger,
  StyledContent,
  StyledArrow,
} from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { Avatar } from 'common/Avatar'
import avatarSample from 'public/static/images/avatar_sample.png'

interface TemplateProps extends ComponentProps<typeof StyledHoverCard> {
  showArrowTrigger: boolean
}

const Template: Story<TemplateProps> = ({ showArrowTrigger, ...args }) => (
  <StoryWrapper
    css={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <StyledHoverCard {...args}>
      <StyledTrigger>
        <Avatar src={avatarSample} />
      </StyledTrigger>
      <StyledContent>
        {showArrowTrigger && <StyledArrow />}
        Hover content
      </StyledContent>
    </StyledHoverCard>
  </StoryWrapper>
)

export default {
  title: 'Primitives/HoverCard',
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
