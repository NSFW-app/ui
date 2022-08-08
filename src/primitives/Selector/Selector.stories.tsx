import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'primitives/Selector'
import { Icon } from 'components/Icon'
import { Flex } from 'primitives/Flex'
import { ComponentProps } from '@stitches/react'

interface TemplateProps extends ComponentProps<typeof Select> {}

const Template: Story<TemplateProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('ETH')
  return (
    <StoryWrapper>
      <Flex css={{ alignItems: 'center' }}>
        <Select
          onOpenChange={(open) => setIsOpen(open)}
          defaultValue='ETH'
          onValueChange={(value) => setSelectedValue(value)}
        >
          <SelectTrigger aria-label='Networks'>
            <Icon
              icon={
                selectedValue === 'ETH'
                  ? 'BadgeEthereum'
                  : selectedValue === 'BNB'
                  ? 'BadgeBinance'
                  : 'BadgePolygon'
              }
              css={{ height: 20, marginRight: '10px' }}
            />
            <SelectValue placeholder='ETH' />
            <SelectIcon>
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
            </SelectIcon>
          </SelectTrigger>
          <SelectContent>
            <SelectViewport>
              <SelectGroup>
                <SelectItem value='ETH'>
                  <Icon icon='BadgeEthereum' css={{ height: 20 }} />
                  <SelectItemText>Ethereum</SelectItemText>
                </SelectItem>
                <SelectItem value='BNB'>
                  <Icon icon='BadgeBinance' css={{ height: 20 }} />
                  <SelectItemText>Binance</SelectItemText>
                </SelectItem>
                <SelectItem value='MATIC'>
                  <Icon icon='BadgePolygon' css={{ height: 20 }} />
                  <SelectItemText>Polygon</SelectItemText>
                </SelectItem>
              </SelectGroup>
            </SelectViewport>
          </SelectContent>
        </Select>
      </Flex>
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/Selector',
  component: Template,
} as Meta

export const NetworkSelector = Template.bind({})
