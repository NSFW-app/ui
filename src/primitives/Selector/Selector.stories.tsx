import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Selector } from 'primitives/Selector'
import { Icon, KnownIcon } from 'components/Icon'
import { Flex } from 'primitives/Flex'
import { ComponentProps } from '@stitches/react'

interface TemplateProps extends ComponentProps<typeof Selector.Root> {}

const tokenToIconMap: Record<string, KnownIcon> = {
  ETH: 'BadgeEthereum',
  BNB: 'BadgeBinance',
  MATIC: 'BadgePolygon',
}

const Template: Story<TemplateProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('ETH')
  return (
    <StoryWrapper>
      <Flex css={{ alignItems: 'center' }}>
        <Selector.Root
          onOpenChange={(open) => setIsOpen(open)}
          defaultValue='ETH'
          onValueChange={(value) => setSelectedValue(value)}
        >
          <Selector.Trigger aria-label='Networks'>
            <Flex center full>
              <Icon
                icon={tokenToIconMap[selectedValue]}
                css={{ height: 20, marginRight: '10px' }}
              />
              <Selector.Value placeholder='ETH' />
              <Selector.Icon>
                <Icon
                  icon='Chevron'
                  css={{
                    transform: !isOpen ? 'rotate(90deg)' : 'rotate(270deg)',
                    transition: 'transform 150ms ease',
                    '& .primary.stroke': {
                      stroke: '$gray900',
                      strokeWidth: '2px',
                    },
                  }}
                />
              </Selector.Icon>
            </Flex>
          </Selector.Trigger>
          <Selector.Content>
            <Selector.Viewport>
              <Selector.Group>
                <Selector.Item value='ETH'>
                  <Icon icon='BadgeEthereum' css={{ height: 20 }} />
                  <Selector.ItemText>Ethereum</Selector.ItemText>
                </Selector.Item>
                <Selector.Item value='BNB' css={{ minWidth: '100px' }}>
                  <Icon icon='BadgeBinance' css={{ height: 20 }} />
                  <Selector.ItemText>BSC Testnet</Selector.ItemText>
                </Selector.Item>
                <Selector.Item value='MATIC'>
                  <Icon icon='BadgePolygon' css={{ height: 20 }} />
                  <Selector.ItemText>Polygon Mainnet</Selector.ItemText>
                </Selector.Item>
              </Selector.Group>
            </Selector.Viewport>
          </Selector.Content>
        </Selector.Root>
      </Flex>
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/Selector',
  component: Template,
} as Meta

export const NetworkSelector = Template.bind({})
