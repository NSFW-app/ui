import React from 'react'
import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import { List } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { Label } from 'primitives/Label'
import { ListItem } from 'primitives/ListItem'

interface TemplateProps extends ComponentProps<typeof List> {
  label?: string
  type?: {}
}

const Template: Story<TemplateProps> = ({ type, label, bulleted }) => (
  <StoryWrapper css={{ maxWidth: '475px' }}>
    <List type={type} bulleted={bulleted}>
      <ListItem>
        <Label css={{ color: 'white' }}>{label}</Label>
      </ListItem>
      <ListItem>
        <Label css={{ color: 'white' }}>{label}</Label>
      </ListItem>
      <ListItem>
        <Label css={{ color: 'white' }}>{label}</Label>
      </ListItem>
    </List>
  </StoryWrapper>
)

export default {
  title: 'Primitives/List',
  component: Template,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Following',
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
Default.args = {
  bulleted: false,
}

export const Grouped = Template.bind({})
Grouped.args = { type: 'grouped' }
