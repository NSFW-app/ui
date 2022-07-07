import React from 'react'
import { Meta, Story } from '@storybook/react'
import { theme } from 'core/stitches'
import { DarkModeProp } from 'core/types'
import { Flex } from 'primitives/Flex'

import * as icons from './icons'
import { Icon, KnownIcon, IconProps } from '.'

export interface TemplateProps extends DarkModeProp, IconProps {
  icon: KnownIcon
  color: string
}

const Template: Story<TemplateProps> = ({ darkMode, icon, color, ...args }) => {
  return (
    <Flex
      css={{
        flexWrap: 'wrap',
        margin: '20px',
        display: 'flex',
        width: '150px',
        borderRadius: '6px',
        backgroundColor: darkMode ? theme.colors.gray400 : theme.colors.gray100,
      }}
    >
      <Flex
        column
        center
        css={{
          height: '150px',
          width: '150px',
          borderRadius: '6px',
          padding: '16px',
        }}
      >
        <Icon
          css={{
            '.primary.fill': { fill: color },
            '.primary.stroke': { stroke: color },
          }}
          icon={icon as KnownIcon}
          {...args}
        />
      </Flex>
    </Flex>
  )
}

export default {
  title: 'Common/Icons',
  component: Template,
  argTypes: {
    icon: {
      // Map actual imported icons to controls with custom labels removing "Icon" suffix
      // https://storybook.js.org/docs/ember/essentials/controls#dealing-with-complex-values
      control: {
        type: 'select',
        labels: Object.keys(icons).reduce(
          (acc, iconName) => ({
            ...acc,
            [iconName]: iconName,
          }),
          {}
        ),
      },
      options: Object.keys(icons),
      mappings: icons,
      defaultValue: 'Blockchain',
    },
    rotate: {
      control: {
        type: 'range',
        min: 0,
        max: 360,
      },
      defaultValue: 0,
    },
    color: {
      control: {
        type: 'color',
      },
    },
    // secondaryColor: {
    //   control: {
    //     type: 'color',
    //   },
    // },
  },
} as Meta

export const Example = Template.bind({})
Example.args = {
  icon: 'Blockchain',
}
