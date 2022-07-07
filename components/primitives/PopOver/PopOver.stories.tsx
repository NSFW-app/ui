import React, { useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'common/Button'
import { StyledArrow, StyledContent, StyledTrigger } from '.'
import { Text } from 'primitives/Text'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import * as Popover from '@radix-ui/react-popover'

const StoryTemplate: Story = () => {
  return (
    <StoryWrapper
      css={{
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <Popover.Root>
        <StyledTrigger basic>Bruh</StyledTrigger>
        <StyledContent basic sideOffset={5}>
          Surprise mdfk
          <StyledArrow />
        </StyledContent>
      </Popover.Root>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/PopOver',
  component: StoryTemplate,
} as Meta

export const Template = StoryTemplate.bind({})
