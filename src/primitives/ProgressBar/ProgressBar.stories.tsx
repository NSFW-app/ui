import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { ProgressBar, ProgressBarProps } from '.'

interface TemplateProps extends ProgressBarProps {}

const Template: Story<TemplateProps> = ({ value = 0 }) => (
  <StoryWrapper>
    <ProgressBar value={value} css={{ width: '400px' }} />
  </StoryWrapper>
)

export default {
  title: 'Primitives/ProgressBar',
  component: Template,
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta

export const Default = Template.bind({})
