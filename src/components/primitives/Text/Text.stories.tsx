import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ComponentProps } from '@stitches/react'
import { DarkModeProp } from 'core/types'
import { StoryWrapper } from 'components/StoryWrapper'
import { Flex } from 'primitives/Flex'
import { Label } from 'primitives/Label'
import { Text } from './index'
import { theme } from 'core/stitches'

type TextProps = ComponentProps<typeof Text>
interface TemplateProps extends DarkModeProp, TextProps {}

const TYPES: TextProps['type'][] = [
  'body1',
  'body2',
  'body3',
  'caption1',
  'caption2',
  'caption3',
]

const Template: Story<TemplateProps> = ({ subText, lineClamp }) => (
  <StoryWrapper>
    {TYPES.map((type, i) => (
      <Flex column css={{ margin: '16px 0' }} key={i}>
        <Label
          capitalized
          // Text "subText" is same color as Label, so let's spice it up
          css={{ ...(subText ? { color: theme.colors.voilet200 } : {}) }}
        >
          {type}
        </Label>
        <Text type={type} subText={subText} lineClamp={lineClamp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam Lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
      </Flex>
    ))}
  </StoryWrapper>
)

export default {
  title: 'Primitives/Text',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {
  lineClamp: false,
  subText: false,
}

export const SubText = Template.bind({})
SubText.args = {
  lineClamp: false,
  subText: true,
}

export const LineClamp = Template.bind({})
LineClamp.args = {
  lineClamp: true,
  subText: false,
}
