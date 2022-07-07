import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Confetti, ConfettiProps } from './index'
import { DarkModeProp } from 'interfaces'
import { Box } from 'primitives/Box'

interface TemplateProps extends ConfettiProps, DarkModeProp {}

const Template: Story<TemplateProps> = ({ darkMode, ...args }) => {
  return (
    <Box css={{ height: '85vh' }}>
      <Confetti {...args} />
    </Box>
  )
}

export default {
  title: 'Common/Confetti',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {
  wind: 0,
  numberOfPieces: 200,
  friction: 0.99,
  gravity: 0.1,
}
