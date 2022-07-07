import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DarkModeProp } from 'core/types'
import { Svg } from './index'

const Template: Story<DarkModeProp> = () => (
  <Svg
    width='57'
    height='57'
    viewBox='0 0 57 57'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M51.1426 31.7143V39.8572C51.1426 43.3843 42.636 48 32.1426 48C21.6492 48 13.1426 43.3843 13.1426 39.8572C13.1426 38.6967 13.1426 36.4348 13.1426 33.0714'
      stroke='#737373'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.9404 33.7737C16.2877 36.8904 23.549 39.8127 32.1428 39.8127C42.6362 39.8127 51.1428 35.4557 51.1428 31.708C51.1428 29.6051 48.4644 27.3003 44.2594 25.6823'
      stroke='#737373'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M43 18.1428V26.2857C43 29.8129 34.4934 34.4285 24 34.4285C13.5066 34.4285 5 29.8129 5 26.2857C5 24.5451 5 19.8834 5 18.1428'
      stroke='#FFB800'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 26.2413C34.4934 26.2413 43 21.8842 43 18.1366C43 14.3889 34.4934 10 24 10C13.5066 10 5 14.3889 5 18.1366C5 21.8842 13.5066 26.2413 24 26.2413Z'
      stroke='#FFB800'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
  // </StoryWrapper>
)

export default {
  title: 'Primitives/Svg',
  component: Template,
} as Meta

export const Example = Template.bind({})
