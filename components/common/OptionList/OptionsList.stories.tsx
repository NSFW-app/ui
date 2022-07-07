import React from 'react'
import { Meta, Story } from '@storybook/react'
import { OptionsList, OptionsListProps, OptionListItem } from './index'
import { StoryWrapper } from 'components/StoryWrapper'
import { useForm } from 'react-hook-form'
import { DEFAULT_POST_TYPE } from 'config'
import { PostType } from 'graphql/types'
import { Post as PostData } from 'graphql/types'

interface TemplateProps extends OptionsListProps {}

const Template: Story<TemplateProps> = () => {
  const { control } = useForm<Partial<PostData>>({
    defaultValues: {
      type: DEFAULT_POST_TYPE,
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
          label='This is the end.......'
          optionValue={PostType.Exclusive}
        />
        <OptionListItem
          header='Teaser'
          label='Hold your breathh.....'
          optionValue={PostType.Teaser}
        />
        <OptionListItem
          header='Story'
          label='And cunt for ten.....'
          optionValue={PostType.Subscription}
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
