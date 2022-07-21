import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import { ListItem } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { Label } from 'primitives/Label'
import { List } from 'primitives/List'

interface TemplateProps extends ComponentProps<typeof ListItem> {
  label?: string
  type?: {}
}

const Template: Story<TemplateProps> = ({ label, type }) => (
  <StoryWrapper css={{ maxWidth: '475px' }}>
    <List type={type}>
      <ListItem>
        <Label css={{ color: 'white', marginBottom: '0px' }}>{label}</Label>
      </ListItem>
    </List>
  </StoryWrapper>
)

export default {
  title: 'Primitives/ListItem',
  component: Template,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['grouped', 'none'],
      defaultValue: 'none',
    },
  },
} as Meta

export const Default = Template.bind({})

export const Grouped = Template.bind({})
Grouped.args = { type: 'grouped' }
