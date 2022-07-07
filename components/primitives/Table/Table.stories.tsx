import React from 'react'
import { Meta } from '@storybook/react'

import { Box } from 'components/primitives/Box'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from './index'
import { theme } from 'lib/theme'

const Template = () => (
  <Box>
    <Table>
      <TableHead>
        <TableRow css={{ backgroundColor: theme.colors.gray400 }}>
          <TableHeader css={{ padding: '24px' }}>One</TableHeader>
          <TableHeader css={{ padding: '24px' }}>Two</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell css={{ color: theme.colors.voilet200, padding: '12px' }}>
            Value 1
          </TableCell>
          <TableCell css={{ color: theme.colors.voilet200, padding: '12px' }}>
            Value 2
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
)

export default {
  title: 'Primitives/Table',
  component: Template,
} as Meta

export const Example = Template.bind({})
