import React from 'react'
import { Story, Meta } from '@storybook/react'
import { toast } from 'react-toastify'
import { Toast } from './index'
import { Flex } from 'primitives/Flex'
import { Button } from 'common/Button'
import { theme } from 'core/stitches'

const Template: Story = () => {
  return (
    <Flex
      css={{
        height: '812px',
        width: '375px',
        margin: '16px',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        borderRadius: '5px',
        paddingBottom: '16px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.colors.gray400,
      }}
    >
      <Button
        onClick={() => toast.info('Info')}
        css={{
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        Info toast
      </Button>
      <Button
        onClick={() => toast.success('Success')}
        css={{
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        Success toast
      </Button>
      <Button
        onClick={() => toast.warn('Warning')}
        css={{
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        Warning toast
      </Button>
      <Button
        onClick={() => toast.error('Error')}
        css={{
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        Error toast
      </Button>
      <Toast
        // Set position absolute for Storybook, leave this as default in Next app
        style={{ position: 'absolute' }}
      />
    </Flex>
  )
}

export default {
  title: 'Common/Toast',
  component: Template,
} as Meta

export const Default = Template.bind({})
