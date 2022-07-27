import React from 'react'
import { Story, Meta } from '@storybook/react'
import { toast } from 'react-toastify'
import { Button } from 'components/Button'
import { SnackBar } from './SnackBar'
import { Toast } from 'components/Toast'
import { useOptions } from './useOptions'
import { Box } from 'primitives/Box'
import { Text } from 'primitives/Text'
import { theme } from 'core/stitches'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  const options = useOptions()

  return (
    <StoryWrapper>
      <Toast />
      <Text css={{ marginBottom: '15px' }}>
        A snackbar is a styled responsive toast. Try switching viewports.
      </Text>
      <Button
        theme='primary'
        css={{ width: '250px' }}
        onClick={() =>
          toast(
            () => (
              <SnackBar
                title='Nice! Your post is live.'
                onActionClick={() => alert('Action clicked!')}
              />
            ),
            options
          )
        }
      >
        Snackbar with action
      </Button>
      <Button
        css={{ width: '250px' }}
        onClick={() =>
          toast.info(
            () => (
              <SnackBar>
                <Box css={{ backgroundColor: 'unset' }}>
                  <Text type='body2'>Upload in progress</Text>
                  <Text type='body2' css={{ color: theme.colors.gray800 }}>
                    Please wait...
                  </Text>
                </Box>
              </SnackBar>
            ),
            options
          )
        }
      >
        Info Snackbar
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/SnackBar',
  component: Template,
} as Meta

export const Default = Template.bind({})
