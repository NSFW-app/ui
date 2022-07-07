import React from 'react'
import { Meta } from '@storybook/react'
import { Nav } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { List } from 'primitives/List'
import { ListItem } from 'primitives/ListItem'

const DefaultTemplate = () => (
  <StoryWrapper>
    <Nav>
      <List>
        <ListItem>List</ListItem>
        <ListItem>items</ListItem>
        <ListItem>in</ListItem>
        <ListItem>a</ListItem>
        <ListItem>nav</ListItem>
      </List>
    </Nav>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Nav',
  component: DefaultTemplate,
} as Meta

export const Template = DefaultTemplate.bind({})
