import React, { useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'common/Button'
import { PopupDialog } from '.'
import { Text } from 'primitives/Text'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'

const StoryTemplate: Story = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // Modal is portalled to document body and shows scroll bar in Storybook, if we set overflow
  // hidden globally in css then it affects all stories, simpler to do this here.
  useEffect(() => {
    const el = document.body
    if (el) {
      el.style.overflow = 'hidden'
    }
  }, [])

  return (
    <StoryWrapper
      css={{
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <PopupDialog
        isOpen={dialogIsOpen}
        onIgnore={() => setDialogIsOpen(false)}
      >
        <Flex
          css={{
            backgroundColor: theme.colors.gray600,
            padding: '40px',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            '@md': {
              width: 'auto',
              borderRadius: '8px',
            },
          }}
        >
          <Text>Something in a dialog</Text>
          <Button
            onClick={() => setDialogIsOpen(false)}
            theme='secondary'
            css={{ maxWidth: '200px', marginTop: '10px' }}
          >
            Close
          </Button>
        </Flex>
      </PopupDialog>
      <Button onClick={() => setDialogIsOpen(true)} theme='primary'>
        Open Popup Dialog
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/PopupDialog',
  component: StoryTemplate,
} as Meta

export const Template = StoryTemplate.bind({})
