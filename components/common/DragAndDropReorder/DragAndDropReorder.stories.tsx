import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CSS, theme } from 'lib/theme'
import {
  DragAndDropReorder,
  DragAndDropReorderProps,
  DragItem,
  DragItemProps,
} from './index'

const Item: React.FC<DragItemProps & CSS> = ({ index, id, children, css }) => (
  <DragItem
    index={index}
    id={id}
    css={{
      border: `1px solid ${theme.colors.gray500}`,
      padding: '20px',
      backgroundColor: theme.colors.gray400,
      borderRadius: '8px',

      ...css,
    }}
  >
    {children}
  </DragItem>
)

const Template: Story<DragAndDropReorderProps> = ({ direction }) => {
  const items = [...Array(6)].map((_, i) => (
    <Item
      key={`item_${i}`}
      index={i}
      id={`item_${i}`}
      css={{
        display: direction === 'vertical' ? 'block' : 'inline-block',
        marginBottom: direction === 'vertical' ? '10px' : '0px',
        marginLeft: direction === 'vertical' ? '0px' : '5px',
        marginRight: direction === 'vertical' ? '0px' : '5px',
      }}
    >
      Item {i + 1}
    </Item>
  ))

  return (
    <DragAndDropReorder css={{ maxWidth: '700px' }} direction={direction}>
      {items}
    </DragAndDropReorder>
  )
}

export default {
  title: 'Common/DragAndDropReorder',
  component: Template,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
} as Meta

export const Default = Template.bind({})
Default.args = {
  direction: 'vertical',
}
