import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Flex } from 'primitives/Flex'
import { Dot } from './index'

interface TemplateProps {
  numDots: number
  numActive: number
}

const Template: Story<TemplateProps> = ({ numDots, numActive }) => {
  return (
    <Flex css={{ margin: '16px', padding: '12px', borderRadius: '5px' }}>
      {[...Array(numDots)].map((_, i) => (
        <Dot key={i} active={i < numActive} />
      ))}
    </Flex>
  )
}

export default {
  title: 'Primitives/Dot',
  component: Template,
  argTypes: {
    numDots: {
      control: {
        type: 'range',
        min: 0,
        max: 3,
      },
    },
    numActive: {
      control: {
        type: 'range',
        min: 0,
        max: 3,
      },
    },
  },
} as Meta

export const Default = Template.bind({})
Default.args = {
  numDots: 3,
  numActive: 1,
}
