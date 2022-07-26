import React, { useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from 'components/StoryWrapper'
import { Button } from 'components/Button'
import { ConfirmPopupDialog } from '.'
import { ConfirmPopupDialogTitle } from './ConfirmPopupDialogTitle'
import { ConfirmPopupDialogDescription } from './ConfirmPopupDialogDescription'
import { ConfirmPopupDialogActions } from './ConfirmPopupDialogActions'
import { ConfirmPopupDialogYesButton } from './ConfirmPopupDialogYesButton'
import { ConfirmPopupDialogNoButton } from './ConfirmPopupDialogNoButton'

const StoryTemplate: Story = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(true)

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
      <ConfirmPopupDialog
        onIgnore={() => setDialogIsOpen(false)}
        isOpen={dialogIsOpen}
      >
        <ConfirmPopupDialogTitle>Unpublished Post</ConfirmPopupDialogTitle>
        <ConfirmPopupDialogDescription>
          You haven’t completed creating your post yet. Would you like to save
          this post as a draft and complete another time?
        </ConfirmPopupDialogDescription>
        <ConfirmPopupDialogActions>
          <ConfirmPopupDialogYesButton onClick={() => setDialogIsOpen(false)} />
          <ConfirmPopupDialogNoButton onClick={() => setDialogIsOpen(false)} />
        </ConfirmPopupDialogActions>
      </ConfirmPopupDialog>
      <Button onClick={() => setDialogIsOpen(true)} theme='primary'>
        Close create post
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/ConfirmPopupDialog',
  component: StoryTemplate,
} as Meta

export const Template = StoryTemplate.bind({})
