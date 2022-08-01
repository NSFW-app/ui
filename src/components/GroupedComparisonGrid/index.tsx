import { styled } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import { Grid } from 'primitives/Grid'

export const GroupedComparisonGrid = styled(Grid, {
  width: '100%',
  margin: 'auto',
  columnGap: '50px',
})

export const Cell = styled(Flex, {
  height: '30px',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'start',
  variants: {
    // TODO: these styles push column beyond parent if the selected column is the last column.
    selected: {
      true: {
        paddingLeft: '30px',
        paddingRight: '30px',
        marginLeft: '-30px',
        marginRight: '-30px',
        backgroundColor: '$gray500',
        borderBottom: 'unset',
      },
    },
  },
})

export const RowCell = styled(Cell, {
  height: '42px',
  borderBottom: `1px solid #3a3b40`,
  minWidth: 'max-content',
  variants: {
    selected: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          inset: '0px 30px',
          borderBottom: `1px solid #3a3b40`,
        },
      },
    },
  },
})

export const SpacerCell = styled(Cell, {
  height: '30px',
  border: 'unset',
  variants: {
    selected: {
      true: { '&::before': { borderBottom: 'unset !important' } },
    },
    top: {
      true: { borderTopLeftRadius: '12px', borderTopRightRadius: '12px' },
    },
    bottom: {
      true: { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' },
    },
  },
})

export const HeaderCell = styled(Cell, {
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flex: 1,
})

export const RowHeaderCell = styled(SpacerCell, {
  height: '60px',
  alignItems: 'flex-end',
})
