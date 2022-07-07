import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Heading } from './index'
import { ComponentProps } from '@stitches/react'
import { DarkModeProp } from 'interfaces'
import { StoryWrapper } from 'components/StoryWrapper'
import { Label } from 'primitives/Label'
import { Flex } from 'primitives/Flex'

type HeadingProps = ComponentProps<typeof Heading>
interface Templateprops extends HeadingProps, DarkModeProp {
  text?: string
}

const HEADINGS: HeadingProps['as'][] = ['h1', 'h2', 'h3', 'h4', 'h5']

const Template: Story<Templateprops> = ({ text, ...args }) => {
  return (
    <StoryWrapper>
      {HEADINGS.map((as, i) => (
        <Flex column css={{ margin: '16px 0' }} key={i}>
          <Label capitalized>{as}</Label>
          <Heading {...args} as={as}>
            {text?.trim() ? text.trim() : 'Goodbye censorship, hello freedom.'}
          </Heading>
        </Flex>
      ))}
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/Heading',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {
  text: '',
  lineClamp: false,
}
