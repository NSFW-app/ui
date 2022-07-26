import { styled, theme } from 'core/stitches'
import { ListItem } from 'primitives/ListItem'
import { textBody2Css } from 'primitives/Text'

export const groupList = {
  display: 'flex',
  justifyContent: 'space-between',
  color: 'white',
  padding: '16px',
  width: '100%',
  alignItems: 'center',
  listStyleType: 'none',
  borderBottom: `1px solid ${theme.colors.gray600}`,
  background: theme.colors.gray400,
  backgroundSize: '200%',
  transition: '.6s',
  transitionTimingFunction: 'cubic-bezier(0.5,1.6,0.4,0.7)',
  '&:hover': {
    background: theme.colors.gray500,
  },
}

const defaultList = {
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
}

export const List = styled('ul', {
  ...textBody2Css,
  variants: {
    horizontal: {
      true: {
        display: 'flex',
      },
    },
    bulleted: {
      true: {
        listStyleType: 'initial',
        marginLeft: '16px',
      },
    },
    type: {
      grouped: {
        [`& ${ListItem}`]: {
          ...groupList,
        },
        [`& ${ListItem}:first-child, & ${ListItem}:first-child > *`]: {
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
        },
        [`& ${ListItem}:last-child, & ${ListItem}:last-child > *`]: {
          border: '0px !important',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
      },
      none: {
        [`& ${ListItem}`]: {
          ...defaultList,
        },
      },
    },
  },
})
