import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Anchor } from './index'
import { VariantProps } from '@stitches/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Text } from 'primitives/Text'
// import { TabsTrack } from 'components/Tabs/TabsTrack'

interface TemplateProps extends VariantProps<typeof Anchor> {}

const Template: Story<TemplateProps> = ({ theme, button }) => (
  <StoryWrapper>
    <Text>
      Goodbye censorship, hello{' '}
      <Anchor
        href='https://youtu.be/dQw4w9WgXcQ'
        target='_blank'
        theme={theme}
        button={button}
      >
        freedom
      </Anchor>
      .
    </Text>
  </StoryWrapper>
)

const ButtonTemplate: Story<TemplateProps> = ({ theme, button }) => (
  <StoryWrapper css={{ maxWidth: '430px' }}>
    <Anchor
      href='https://youtu.be/dQw4w9WgXcQ'
      target='_blank'
      theme={theme}
      button={button}
    >
      Link that looks like a button
    </Anchor>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Anchor',
  component: Template,
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
      control: {
        type: 'select',
      },
    },
    button: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary',
  button: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
  button: false,
}

export const PrimaryButton = ButtonTemplate.bind({})
PrimaryButton.args = {
  theme: 'primary',
  button: true,
}

export const SecondaryButton = ButtonTemplate.bind({})
SecondaryButton.args = {
  theme: 'secondary',
  button: true,
}

// export const TabButton: Story<TemplateProps> = () => (
//   <TabsTrack>
//     <Anchor href='' button='tab' active>
//       Active
//     </Anchor>
//     <Anchor href='' button='tab'>
//       Expired
//     </Anchor>
//   </TabsTrack>
// )
