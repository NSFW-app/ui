import React from 'react'
import { Meta } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import { styled } from 'lib/theme'
import { Grid } from '../Grid/index'
import { Text } from 'primitives/Text'

const ColorBlock = styled(Flex, {
  width: '100%',
  height: '50px',
  flexDirection: 'column',
  alignItems: 'flex-start',
})
const Label: React.FC = ({ children }) => (
  <Flex center>
    <Text type='body2'>{children}</Text>
  </Flex>
)

const Template = () => {
  return (
    <StoryWrapper>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
          gridGap: '3px',
        }}
      >
        {Array.from(Array(10).keys()).map((n) =>
          n > 0 ? <Label key={n}>{n}</Label> : <Flex />
        )}
        <Label>Gray</Label>
        <ColorBlock css={{ background: theme.colors.gray100 }} />
        {/* No 200 specified */}
        <ColorBlock css={{ background: theme.colors.gray100 }} />
        {/* No 300 specified */}
        <ColorBlock css={{ background: theme.colors.gray100 }} />
        <ColorBlock css={{ background: theme.colors.gray400 }} />
        <ColorBlock css={{ background: theme.colors.gray500 }} />
        <ColorBlock css={{ background: theme.colors.gray600 }} />
        <ColorBlock css={{ background: theme.colors.gray700 }} />
        <ColorBlock css={{ background: theme.colors.gray800 }} />
        <ColorBlock css={{ background: theme.colors.gray900 }} />

        <Label>Voilet</Label>
        <ColorBlock css={{ background: theme.colors.voilet100 }} />
        <ColorBlock css={{ background: theme.colors.voilet200 }} />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />

        <Label>Red</Label>
        <ColorBlock css={{ background: theme.colors.red100 }} />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />
        <Flex />

        <Label>Gold</Label>
        <ColorBlock css={{ background: theme.colors.gold100 }} />
      </Grid>
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/Colors',
  component: Template,
} as Meta

export const Example = Template.bind({})
