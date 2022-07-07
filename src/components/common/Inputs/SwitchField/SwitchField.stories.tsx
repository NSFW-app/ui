import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SwitchField, SwitchFieldProps } from '.'
import { StoryWrapper } from 'components/StoryWrapper'
import { List } from 'primitives/List'
import { ListItem } from 'primitives/ListItem'

interface TemplateProps extends SwitchFieldProps {}

const Template: Story<TemplateProps> = ({
  label,
  checked,
  disabled,
  onCheckedChange,
  type,
}) => (
  <StoryWrapper css={{ width: '400px' }}>
    <List type={type}>
      <ListItem>
        <SwitchField
          label={label}
          checked={checked}
          disabled={disabled}
          onCheckedChange={onCheckedChange}
        />
      </ListItem>
    </List>
  </StoryWrapper>
)

export default {
  title: 'Common/Inputs/SwitchField',
  component: Template,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Following',
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['grouped', 'none'],
      defaultValue: 'none',
    },
    //If default value for 'checked' is set, the switch can not be clicked anymore inside the storyboard
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Default = Template.bind({})

export const Grouped = Template.bind({})
Grouped.args = { type: 'grouped' }
