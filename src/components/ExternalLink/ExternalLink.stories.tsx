import { Story, Meta } from '@storybook/react'
import { Box } from 'primitives/Box'
import { ExternalLink, LinkProps } from '.'

interface TemplateProps extends LinkProps {}

const Template: Story<TemplateProps> = ({ href, label, type, css }) => {
  return (
    <Box css={{ padding: '2em' }}>
      <ExternalLink href={href} label={label} type={type} css={css} />
    </Box>
  )
}

export default {
  title: 'Components/ExternalLink',
  component: Template,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'body1',
          'body2',
          'body3',
          'caption1',
          'caption2',
          'caption3',
        ],
      },
    },
  },
} as Meta

export const Example = Template.bind({})
Example.args = {
  href: 'https://snapshot.org/#/nsfwgov.eth',
  label: 'Voting ',
  type: 'body1',
  css: { color: '$gray800' },
}
