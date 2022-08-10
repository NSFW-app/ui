import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { ProgressBar, ProgressBarProps } from '.'

interface TemplateProps extends ProgressBarProps {}
const Template: Story<TemplateProps> = ({
  defaultValue = 10,
  progressValue,
}) => (
  <StoryWrapper>
    <ProgressBar
      defaultValue={defaultValue}
      progressValue={progressValue}
      css={{ width: '400px' }}
    />
  </StoryWrapper>
)

export default {
  title: 'Primitives/ProgressBar',
  component: Template,
  argTypes: {
    defaultValue: {
      control: {
        type: 'number',
      },
    },
    progressValue: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta

export const Default = Template.bind({})
