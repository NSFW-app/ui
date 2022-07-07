import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Tabs } from './index'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { theme } from 'lib/theme'
import { StoryWrapper } from 'components/StoryWrapper'

const Template: Story = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <StoryWrapper>
      <Tabs
        buttonLabels={['Admirer', 'Creator']}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        css={{
          width: '475px',
        }}
      >
        <Flex
          css={{
            padding: '50px 0px',
            width: '100%',
            backgroundColor: theme.colors.gray400,
            marginTop: '16px',
          }}
        >
          <Text
            css={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            Tab 1
          </Text>
        </Flex>
        <Flex
          css={{
            padding: '50px 0px',
            width: '100%',
            backgroundColor: theme.colors.gray400,
            marginTop: '16px',
            borderLeft: `1px solid ${theme.colors.gray100}`,
          }}
        >
          <Text
            css={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            Tab 2
          </Text>
        </Flex>
      </Tabs>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/Tabs',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {}
