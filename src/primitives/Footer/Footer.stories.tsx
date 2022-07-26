import React from 'react'
import { Meta } from '@storybook/react'
import { Footer } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { List } from 'primitives/List'
import { ListItem } from 'primitives/ListItem'
import { Nav } from 'primitives/Nav'
import { theme } from 'core/stitches'
import { Text } from 'primitives/Text'

const DefaultTemplate = () => (
  <StoryWrapper css={{ maxWidth: '1200px' }}>
    <Footer css={{ backgroundColor: theme.colors.gray400 }}>
      <Nav>
        <List
          horizontal
          css={{
            justifyContent: 'space-evenly',
            margin: '0 auto',
          }}
        >
          <ListItem>
            <Text>List</Text>
          </ListItem>
          <ListItem>
            <Text>Aitems</Text>
          </ListItem>
          <ListItem>
            <Text>in</Text>
          </ListItem>
          <ListItem>
            <Text>a</Text>
          </ListItem>
          <ListItem>
            <Text>nav</Text>
          </ListItem>
          <ListItem>
            <Text>in</Text>
          </ListItem>
          <ListItem>
            <Text>a</Text>
          </ListItem>
          <ListItem>
            <Text>footer</Text>
          </ListItem>
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
