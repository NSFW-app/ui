import React from 'react'
import { Meta, Story } from '@storybook/react'
import { OptionsList, OptionsListProps, OptionListItem } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { useForm, FieldValues } from 'react-hook-form'

interface TemplateProps extends OptionsListProps {}

const Template: Story<TemplateProps> = () => {
  const { control } = useForm<FieldValues>({
    defaultValues: {
      type: 'Exclusive',
    },
  })

  return (
    <StoryWrapper css={{ maxWidth: '475px' }}>
      <OptionsList
        control={control}
        name='type'
        defaultValue='exclusive'
        onOptionChange={(e) => console.log(e)}
      >
        <OptionListItem
          header='Exclusive'
          label='Some label'
          optionValue={'Exclusive'}
        />
        <OptionListItem
          header='Teaser'
          label='Some label'
          optionValue={'Teaser'}
        />
        <OptionListItem
          header='Story'
          label='Some label'
          optionValue={'Subscription'}
        />
      </OptionsList>
    </StoryWrapper>
  )
}
export default {
  title: 'Common/OptionsList',
  component: Template,
} as Meta

export const Example = Template.bind({})
