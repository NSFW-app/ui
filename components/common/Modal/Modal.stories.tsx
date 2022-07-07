import React, { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { Text } from 'primitives/Text'
import { StoryWrapper } from 'components/StoryWrapper'
import { Modal, ModalProps } from 'common/Modal'
import { Button } from 'common/Button'
import { theme } from 'lib/theme'
import { Icon } from 'common/Icon'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalContentDialog } from './ModalContentDialog'

const Template: Story<ModalProps> = ({ animation }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
      <Modal
        isOpen={modalIsOpen}
        css={{ backgroundColor: theme.colors.gray600 }}
        animation={animation}
      >
        <ModalCloseButton onClick={() => setModalIsOpen(false)} />
        <Text css={{ maxWidth: '400px', textAlign: 'center', padding: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
      </Modal>
      <Button onClick={() => setModalIsOpen(true)} theme='primary'>
        Open Modal
      </Button>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Modal',
  component: Template,
  argTypes: {
    animation: {
      options: [
        'fadeIn',
        'fadeBottomToTop',
        'fadeTopToBottom',
        'fadeRightToLeft',
        'fadeLeftToRight',
      ],
      defaultValue: 'fadeIn',
      control: {
        type: 'select',
      },
    },
  },
} as Meta

export const FullScreen = Template.bind({})

const OpaqueBackgroundTemplate: Story<ModalProps> = ({ animation }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
        overflowX: 'hidden',
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        onBackgroundClick={() => setModalIsOpen(false)}
        animation={animation}
      >
        <ModalContentDialog css={{ backgroundColor: theme.colors.gray300 }}>
          <ModalCloseButton onClick={() => setModalIsOpen(false)} />
          <Text
            css={{
              // on mobile the text is to close to the button, in real implementation, theres should be
              // some kind of header for the mobile view.
              marginTop: '48px',
              '@lg': { marginTop: 0 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Text>
        </ModalContentDialog>
      </Modal>
      <Button onClick={() => setModalIsOpen(true)} theme='primary'>
        Open Modal
      </Button>
    </StoryWrapper>
  )
}

export const OpaqueBackground = OpaqueBackgroundTemplate.bind({})

const NestedModalsTemplate: Story<ModalProps> = ({ animation }) => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false)
  const [modal2IsOpen, setModal2IsOpen] = useState(false)
  const [modal3IsOpen, setModal3IsOpen] = useState(false)

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
        overflow: 'hidden',
        maxHeight: '100%',
        height: '100%',
      }}
    >
      {/* Modal 1 */}
      <Modal
        isOpen={modal1IsOpen}
        css={{ backgroundColor: theme.colors.gray400, flexDirection: 'column' }}
        animation={animation}
      >
        <ModalCloseButton onClick={() => setModal1IsOpen(false)}>
          <Icon icon='Arrow' css={{ transform: 'rotate(180deg)' }} />
        </ModalCloseButton>
        <Text css={{ marginBottom: '5px' }}>Modal 1 content</Text>
        <Button
          onClick={() => setModal2IsOpen(true)}
          theme='primary'
          css={{ maxWidth: '200px' }}
        >
          Open nested modal
        </Button>
      </Modal>
      {/* Modal 2 */}
      <Modal
        isOpen={modal2IsOpen}
        css={{ backgroundColor: theme.colors.gray500, flexDirection: 'column' }}
        animation={animation}
      >
        <ModalCloseButton onClick={() => setModal2IsOpen(false)}>
          <Icon icon='Arrow' css={{ transform: 'rotate(180deg)' }} />
        </ModalCloseButton>
        <Text css={{ marginBottom: '5px' }}>Modal 2 content</Text>
        <Button
          onClick={() => setModal3IsOpen(true)}
          theme='primary'
          css={{ maxWidth: '200px' }}
        >
          Open nested modal
        </Button>
      </Modal>
      {/* Modal 3 */}
      <Modal
        isOpen={modal3IsOpen}
        css={{ backgroundColor: theme.colors.gray600, flexDirection: 'column' }}
        animation={animation}
      >
        <ModalCloseButton onClick={() => setModal3IsOpen(false)}>
          <Icon icon='Arrow' css={{ transform: 'rotate(180deg)' }} />
        </ModalCloseButton>
        <Text css={{ marginBottom: '5px' }}>Modal 3 content</Text>
      </Modal>
      {/* Main open button */}
      <Button onClick={() => setModal1IsOpen(true)} theme='primary'>
        Open Modal
      </Button>
    </StoryWrapper>
  )
}

export const NestedModals = NestedModalsTemplate.bind({})
NestedModals.args = {
  animation: 'fadeBottomToTop',
}
