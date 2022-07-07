import React from 'react'
import { Story, Meta } from '@storybook/react'
import { CSS } from '@stitches/react'
import { DarkModeProp } from 'interfaces'
import { Box } from './index'
import { Text } from 'primitives/Text'
import { StoryWrapper } from 'components/StoryWrapper'

interface TemplateProps extends DarkModeProp {
  backgroundColor?: CSS['backgroundColor']
  color?: CSS['color']
}

const Template: Story<TemplateProps> = ({
  darkMode,
  backgroundColor,
  color,
}) => {
  return (
    <StoryWrapper>
      <Box css={{ backgroundColor, color }}>
        <Text>{`This is some content in a ${
          darkMode ? 'dark' : 'light'
        } mode box.`}</Text>
        <Text>
          {`A Box is a styled <div> component, with a default background color, and
            transitions applied on background-color and color.`}
        </Text>
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/Box',
  component: Template,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
} as Meta

export const Default = Template.bind({})
