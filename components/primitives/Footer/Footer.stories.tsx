import React from 'react'
import { Meta } from '@storybook/react'
import { Footer } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { List } from 'primitives/List'
import { ListItem } from 'primitives/ListItem'
import { Nav } from 'primitives/Nav'
import { theme } from 'lib/theme'

const DefaultTemplate = () => (
  <StoryWrapper>
    <Footer css={{ backgroundColor: theme.colors.gray400 }}>
      <Nav>
        <List
          horizontal
          css={{
            justifyContent: 'space-evenly',
            maxWidth: '200px',
            margin: '0 auto',
          }}
        >
          <ListItem>List</ListItem>
          <ListItem>items</ListItem>
          <ListItem>in</ListItem>
          <ListItem>a</ListItem>
          <ListItem>nav</ListItem>
          <ListItem>in</ListItem>
          <ListItem>a</ListItem>
          <ListItem>footer</ListItem>
        </List>
      </Nav>
    </Footer>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Footer',
  component: DefaultTemplate,
} as Meta

export const Template = DefaultTemplate.bind({})
