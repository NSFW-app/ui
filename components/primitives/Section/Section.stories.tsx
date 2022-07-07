import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Section } from './index'
import { DarkModeProp } from 'interfaces'

const Template: Story<DarkModeProp> = ({ darkMode }) => (
  <Section
    css={{
      padding: '50px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    {`This is some content in a ${darkMode ? 'dark' : 'light'} mode Section`}
  </Section>
)

export default {
  title: 'Primitives/Section',
  component: Template,
} as Meta

export const Default = Template.bind({})
