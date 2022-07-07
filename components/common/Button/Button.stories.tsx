import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CSS, theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import { Icon } from 'common/Icon'
import { StoryWrapper } from 'components/StoryWrapper'
import { Label } from 'primitives/Label'
import { Button, ButtonProps } from './index'
import { TabsTrack } from 'common/Tabs/TabsTrack'

const LeftIconCss: CSS = { marginRight: '8px' }
const RightIconCss: CSS = {
  marginLeft: '8px',
}

const Template: Story<ButtonProps> = ({ children = 'Label', ...args }) => (
  <StoryWrapper css={{ maxWidth: '400px' }}>
    <Flex column>
      <Label>Primary</Label>
      <Button theme='primary' {...args}>
        {children}
      </Button>
    </Flex>
    <Flex column css={{ marginTop: '8px' }}>
      <Label>Secondary</Label>
      <Button theme='secondary' {...args}>
        {children}
      </Button>
    </Flex>
  </StoryWrapper>
)

const DefaultTemplate: Story<ButtonProps> = (args) => <Template {...args} />

export default {
  title: 'Common/Button',
  component: DefaultTemplate,
  argTypes: {
    loading: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    round: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Default = DefaultTemplate.bind({})

export const Loading = DefaultTemplate.bind({})
Loading.args = {
  loading: true,
}

export const Disabled = DefaultTemplate.bind({})
Disabled.args = {
  disabled: true,
}

export const IconLeft: Story<ButtonProps> = (args) => (
  <Template {...args}>
    <Icon css={LeftIconCss} icon='Arrow' rotate={180} />
    <span>Label</span>
  </Template>
)
// Disable round control for this story - demonstrated below for simpler template.
IconLeft.argTypes = { round: { control: { type: null } } }

export const IconRight: Story<ButtonProps> = (args) => (
  <Template {...args}>
    <span>Label</span>
    <Icon css={RightIconCss} icon='Arrow' />
  </Template>
)
// Disable round control for this story - demonstrated below for simpler template.
IconRight.argTypes = { round: { control: { type: null } } }

export const RoundedIcon: Story<ButtonProps> = (args) => (
  <Template {...args}>
    <Icon icon='Arrow' />
  </Template>
)
RoundedIcon.args = { round: true }

export const Pills: Story<ButtonProps> = (args) => (
  <StoryWrapper css={{ maxWidth: '150px' }}>
    <Flex column>
      <Label>Active Pill</Label>
      <Button pill active {...args}>
        Following
      </Button>
    </Flex>
    <Flex column css={{ marginTop: '28px' }}>
      <Label>Inactive Pill</Label>
      <Button pill {...args}>
        Following
      </Button>
    </Flex>
  </StoryWrapper>
)
Pills.parameters = { controls: { exclude: ['round', 'disabled'] } }

export const TabButton: Story<ButtonProps> = (args) => (
  <TabsTrack>
    <Button tab active>
      Active
    </Button>
    <Button tab>Expired</Button>
  </TabsTrack>
)
