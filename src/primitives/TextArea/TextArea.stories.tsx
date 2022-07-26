import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ComponentProps } from '@stitches/react'
import { TextArea } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { DarkModeProp } from 'core/types'

interface TemplateProps extends DarkModeProp, ComponentProps<typeof TextArea> {}
const Template: Story<TemplateProps> = ({ ...args }) => (
  <StoryWrapper>
    <TextArea css={{ maxWidth: '320px', width: '100%' }} {...args} />
  </StoryWrapper>
)

export default {
  title: 'Primitives/TextArea',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Bio',
  error: false,
  disabled: false,
}
