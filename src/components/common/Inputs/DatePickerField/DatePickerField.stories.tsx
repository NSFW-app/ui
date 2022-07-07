import React from 'react'
import { Story, Meta } from '@storybook/react'
// import { DatePickerField, DatePickerFieldProps } from './index'
// import { useForm } from 'react-hook-form'
// import subYears from 'date-fns/subYears'
// import { DarkModeProp } from 'core/types'
import { StoryWrapper } from 'components/StoryWrapper'

// interface TemplateProps
//   extends Omit<DatePickerFieldProps, 'name'>,
//     DarkModeProp {
//   errorMsg: string
//   fullWidth: boolean
// }

const Template: Story = () =>
  // {
  // darkMode,
  // fullWidth,
  // error,
  // errorMsg,
  // ...args
  // }
  {
    // const { control } = useForm({
    //   defaultValues: {
    //     dateInput: subYears(new Date(), 18),
    //   },
    // })

    return (
      <StoryWrapper>
        TODO
        {/* <DatePickerField
        name='dateInput'
        error={error && (errorMsg || error)}
        {...args}
        control={control}
      /> */}
      </StoryWrapper>
    )
  }

export default {
  title: 'Common/Inputs/DatePickerField',
  component: Template,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    errorMsg: {
      control: {
        type: 'text',
      },
      defaultValue: 'This field is required.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

export const Default = Template.bind({})

// export const Error = Template.bind({})
// Error.args = {
//   error: true,
//   errorMsg: undefined,
// }

// export const ErrorWithMessage = Template.bind({})
// ErrorWithMessage.args = {
//   error: true,
// }

// export const Disabled = Template.bind({})
// Disabled.args = {
//   disabled: true,
// }
