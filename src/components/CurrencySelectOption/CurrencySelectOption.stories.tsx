import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { ButtonGroup } from 'primitives/ButtonGroup'
import { CurrencySelectOption, CurrencySelectOptionProps } from '.'

const Template: Story<CurrencySelectOptionProps> = (args) => {
  return (
    <StoryWrapper css={{ maxWidth: '475px' }}>
      <CurrencySelectOption {...args} />
    </StoryWrapper>
  )
}

export default {
  title: 'Components/CurrencyButton',
  component: Template,
  argTypes: {
    icon: {
      options: ['BadgeUsd', 'BadgePornRocket'],
      control: { type: 'select' },
    },
  },
} as Meta

export const Example = Template.bind({})
Example.args = {
  title: 'USD Coin',
  subtitle: 'USDC',
  icon: 'BadgeUsd',
}

export const ExampleGroup = () => (
  <StoryWrapper css={{ maxWidth: '475px' }}>
    <ButtonGroup orientation='vertical'>
      <CurrencySelectOption title='USD Coin' subtitle='USDC' icon='BadgeUsd' />
      <CurrencySelectOption
        title='PornRocket'
        subtitle='PORNROCKET'
        icon='BadgePornRocket'
      />
    </ButtonGroup>
  </StoryWrapper>
)
