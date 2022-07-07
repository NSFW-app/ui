import { styled } from 'lib/theme'
import { Flex } from 'primitives/Flex'

export const MetricLinksContainer = styled(Flex, {
  '& > div:not(:first-of-type)': {
    marginLeft: '4px',
  },
  '& > div:not(:last-of-type)': {
    marginRight: '4px',
  },
  '&::-webkit-scrollbar': {
    height: '0px',
  },
  maxWidth: '100%',
  overflowX: 'scroll',
})
