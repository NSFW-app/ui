import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Footer, FooterProps } from './index'

const DefaultTemplate: Story<FooterProps> = () => {
  return <Footer />
}

export default {
  title: 'Common/Footer',
  component: DefaultTemplate,
} as Meta

export const Templte = DefaultTemplate.bind({})
