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
import { ConfirmPopupDialogProps } from './ConfirmPopupDialog'

const Template: Story<ConfirmPopupDialogProps> = (props) => {
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
      <ConfirmPopupDialog
        {...props}
        onIgnore={() => setDialogIsOpen(false)}
        isOpen={dialogIsOpen}
      />
      <Button onClick={() => setDialogIsOpen(true)} theme='primary'>
        Open Popup Dialog
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/ConfirmPopupDialog',
  component: Template,
} as Meta

// Building your own
export const ComposedExample = () => {
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
        {/* You can pass your own children entirely, or extend these blocks */}
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
        Open Popup Dialog
      </Button>
    </StoryWrapper>
  )
}

export const PropsBasedExample = Template.bind({})
PropsBasedExample.args = {
  title: 'Disconnect Wallet',
  description: 'Please confirm that you would like to disconnect your wallet.',
  confirmButtonLabel: 'Disconnect',
  rejectButtonLabel: 'Cancel',
}

export const NoActions = Template.bind({})
NoActions.args = {
  title: 'Some error',
  description: 'Something has gone wrong',
  primaryAction: null,
  secondaryAction: null,
}

export const WithCustomPrimaryAction = Template.bind({})
WithCustomPrimaryAction.args = {
  title: 'Some error',
  description: 'Something has gone wrong',
  primaryAction: <Button theme='primary'>Switch network</Button>,
  secondaryAction: null,
}

export const WithBothCustomActions = Template.bind({})
WithBothCustomActions.args = {
  title: 'Some error',
  description: 'Something has gone wrong',
  primaryAction: (
    <Button theme='primary' css={{ marginRight: '8px' }}>
      Switch network
    </Button>
  ),
  secondaryAction: (
    <Button theme='secondary' css={{ marginLeft: '8px' }}>
      Disconnect wallet
    </Button>
  ),
}
