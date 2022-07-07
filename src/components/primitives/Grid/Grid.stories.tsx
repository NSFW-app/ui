import React from 'react'
import { Meta } from '@storybook/react'
import { Box } from 'components/primitives/Box'
import { Grid } from './index'
import { theme } from 'core/stitches'

const Template = () => (
  <Box
    css={{
      maxWidth: '800px',
    }}
  >
    <Grid
      css={{
        gridTemplateColumns: 'repeat(3, auto)',
        gridGap: '8px',
        margin: '8px',
      }}
    >
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray400,
        }}
      >
        Item
      </Box>
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray500,
        }}
      >
        Item
      </Box>
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray600,
        }}
      >
        Item
      </Box>
    </Grid>
    <Grid
      css={{
        gridTemplateColumns: 'repeat(2, auto)',
        gridGap: '8px',
        margin: '8px',
      }}
    >
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray400,
        }}
      >
        Item
      </Box>
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray500,
        }}
      >
        Item
      </Box>
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray600,
        }}
      >
        Item
      </Box>
      <Box
        css={{
          padding: '20px',
          backgroundColor: theme.colors.gray700,
        }}
      >
        Item
      </Box>
    </Grid>
  </Box>
)

export default {
  title: 'Primitives/Grid',
  component: Template,
} as Meta

export const Example = Template.bind({})
