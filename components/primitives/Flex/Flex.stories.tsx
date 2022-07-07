import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DarkModeProp } from 'interfaces'
import { Flex } from './index'

const colors = ['$gray400', '$gray500', '$gray600']

const layouts = {
  none: undefined,
  '1, 1, 1': ['100%', '100%', '100%'],
  '1/3, 1': ['50%', '100%'],
  '1/2, 1': ['50%', '50%'],
}

interface TemplateProps extends DarkModeProp {
  layout: keyof typeof layouts
  direction: 'vertical' | 'horizontal'
}

const Template: Story<TemplateProps> = ({ darkMode, layout, direction }) => {
  const templateLayout = layouts[layout]

  return (
    <Flex
      fullWidth
      column={direction === 'vertical'}
      center={!templateLayout}
      css={{ height: '600px' }}
    >
      {templateLayout
        ? [...Array(templateLayout.length)].map((_, i) => (
            <Flex
              key={i}
              center
              fullHeight
              css={{
                backgroundColor: colors[i],
                [direction === 'vertical' ? 'height' : 'width']:
                  templateLayout[i],
                color: '$grays900',
              }}
            >
              Flex child {i + 1}
            </Flex>
          ))
        : `This is some content in a ${darkMode ? 'dark' : 'light'} mode Flex`}
    </Flex>
  )
}

export default {
  title: 'Primitives/Flex',
  component: Template,
  argTypes: {
    layout: {
      control: {
        type: 'radio',
      },
      options: Object.keys(layouts),
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

export const Example = Template.bind({})
Example.args = {
  layout: '1, 1, 1',
  direction: 'horizontal',
}
