import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { Drawer } from './index'
import { Flex } from 'primitives/Flex'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'
import { Text } from 'primitives/Text'
import { Image } from 'primitives/Image'
import { theme } from 'core/stitches'
import stubImage from 'public/images/avatar_sample.png'

const Template = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)

  return (
    <Flex
      // TODO: this is applying a mobile Story frame, how should this component be used on desktop?
      // Is it mobile only?
      css={{
        height: '812px',
        width: '375px',
        margin: '16px',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: theme.colors.gray400,
      }}
    >
      <Text
        css={{
          color: theme.colors.gray900,
          textAlign: 'center',
        }}
      >
        Drawer example
      </Text>
      <Button
        onClick={() => setDrawerIsOpen(true)}
        css={{
          marginTop: '16px',
          marginBottom: '16px',
        }}
      >
        Open drawer
      </Button>
      <Drawer
        opened={drawerIsOpen}
        css={{
          // Height and width only set here so drawer is the right size for Storybook,
          // in real app implementation it will take up full viewport width and height
          height: '812px',
          width: '375px',
          // Position is "fixed" by default but setting to "absolute" for correct display
          // in Storybook
          position: 'absolute',
          backgroundColor: theme.colors.gray400,
        }}
      >
        <Flex
          css={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%',
          }}
        >
          <Image
            src={stubImage}
            alt='Storybook drawer image example'
            css={{
              height: '240px',
              width: '240px',
              borderRadius: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '220px',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <Flex center>
            <Button
              round
              onClick={() => setDrawerIsOpen(false)}
              css={{
                marginTop: '16px',
                marginBottom: '16px',
              }}
            >
              <Icon icon='Arrow' rotate={0} />
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    </Flex>
  )
}

export default {
  title: 'Common/Drawer',
  component: Template,
} as Meta

export const Example = Template.bind({})
