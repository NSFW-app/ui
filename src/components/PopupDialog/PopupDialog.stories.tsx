import { useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'components/Button'
import { PopupDialog } from './PopupDialog'
import { Text } from 'primitives/Text'
import { Flex } from 'primitives/Flex'
import { PopupDialogContent } from './PopupDialogContent'

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
        <PopupDialogContent>
          <Text>Something in a dialog</Text>
          <Flex full center>
            <Button
              onClick={() => setDialogIsOpen(false)}
              theme='secondary'
              css={{ maxWidth: '200px', marginTop: '10px' }}
            >
              Close
            </Button>
          </Flex>
        </PopupDialogContent>
      </PopupDialog>
      <Button onClick={() => setDialogIsOpen(true)} theme='primary'>
        Open Popup Dialog
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/PopupDialog',
  component: StoryTemplate,
} as Meta

export const Template = StoryTemplate.bind({})
