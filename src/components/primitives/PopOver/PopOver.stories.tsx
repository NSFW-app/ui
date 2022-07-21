import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { PopOver, PopOverContent, PopOverTrigger, PopOverArrow } from '.'

const StoryTemplate: Story = () => {
  return (
    <StoryWrapper
      css={{
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <PopOver>
        <PopOverTrigger basic>Bruh</PopOverTrigger>
        <PopOverContent basic sideOffset={5}>
          Surprise mdfk
          <PopOverArrow />
        </PopOverContent>
      </PopOver>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/PopOver',
  component: StoryTemplate,
} as Meta

export const Template = StoryTemplate.bind({})
