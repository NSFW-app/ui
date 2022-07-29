import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { ComponentProps } from '@stitches/react'
import { Card } from '.'
import { Heading } from 'primitives/Heading'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { Avatar } from 'components/Avatar'

import avatarSample from 'public/images/avatar_sample.png'

interface TemplateProps extends ComponentProps<typeof Card> {}

const Template: Story<TemplateProps> = ({ children = 'Label', ...args }) => (
  <StoryWrapper style={{ maxWidth: '400px', width: '100%' }}>
    <Card {...args}>
      <Flex full>
        {/* Heading & Amount */}
        <Flex column full css={{ justifyContent: 'space-around' }}>
          <Heading as='h3'>$NSFW</Heading>
          <Text type='subhead1' subText css={{ marginTop: '8px' }}>
            50
          </Text>
        </Flex>

        {/* Icon */}
        <Flex css={{ paddingTop: '0px' }}>
          <Avatar src={avatarSample} status='active' />
        </Flex>
      </Flex>
    </Card>
  </StoryWrapper>
)

export default {
  title: 'Primitives/Card',
  component: Template,
} as Meta

export const Default = Template.bind({})

export const Dotted = Template.bind({})
Dotted.args = {
  dotted: true,
}

export const Clear = Template.bind({})
Clear.args = {
  clear: true,
}

export const Faint = Template.bind({})
Faint.args = {
  faint: true,
}
