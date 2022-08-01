import { ComponentProps } from '@stitches/react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'primitives/Button'
import { ButtonGroup } from '.'

type ButtonThemes = ComponentProps<typeof Button>['theme']

interface TemplateProps extends ComponentProps<typeof ButtonGroup> {
  buttonTheme: ButtonThemes
}

const Template: Story<TemplateProps> = ({ buttonTheme, ...args }) => {
  return (
    <StoryWrapper css={{ maxWidth: '475px' }}>
      <ButtonGroup {...args}>
        <Button theme={buttonTheme}>One</Button>
        <Button theme={buttonTheme}>Two</Button>
        <Button theme={buttonTheme}>Three</Button>
      </ButtonGroup>
    </StoryWrapper>
  )
}

export default {
  title: 'Primitives/ButtonGroup',
  component: Template,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    buttonTheme: {
      options: ['danger', 'primary', 'secondary', 'text'] as ButtonThemes[],
      control: { type: 'select' },
    },
  },
} as Meta

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
  buttonTheme: 'secondary',
}
