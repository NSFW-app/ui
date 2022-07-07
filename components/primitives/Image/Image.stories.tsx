import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Image, ImageProps } from '.'

interface TemplateProps {
  width: number
  height: number
}

const Template: Story<TemplateProps> = ({ width, height }) => {
  return (
    <Image
      css={{ margin: '16px', width: `${width}px`, height: `${height}px` }}
      src='/static/images/bg-image.png'
      alt='SB sample image'
    />
  )
}

export default {
  title: 'Primitives/Image',
  component: Template,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
      },
    },
  },
} as Meta

export const Example = Template.bind({})
Example.args = {
  width: 400,
  height: 600,
}
