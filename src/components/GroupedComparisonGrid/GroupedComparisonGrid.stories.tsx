import { Meta, Story } from '@storybook/react'
import { styled } from 'core/stitches'
import { StoryWrapper } from 'components/StoryWrapper'
import {
  GroupedComparisonGrid,
  RowCell,
  HeaderCell,
  SpacerCell,
  RowHeaderCell,
} from '.'
import { Heading } from 'primitives/Heading'
import { Box } from 'primitives/Box'
import { Icon } from 'components/Icon'
import { Text } from 'primitives/Text'
import { Flex } from 'primitives/Flex'
import { Anchor } from 'primitives/Anchor'

const PricingComparison = styled(GroupedComparisonGrid, {
  gridTemplateColumns: 'repeat(4, auto)',
})

interface TemplateProps {}

const Template: Story<TemplateProps> = () => {
  return (
    <StoryWrapper className='wrapper'>
      <Box
        css={{
          padding: '24px',
          borderRadius: '16px',
          backgroundColor: '$gray400',
        }}
      >
        <PricingComparison>
          <SpacerCell />
          <SpacerCell />
          <SpacerCell selected top />
          <SpacerCell />

          <HeaderCell />
          <HeaderCell>
            <Heading as='h3'>Free</Heading>
          </HeaderCell>
          <HeaderCell selected>
            <Heading as='h3'>Standard</Heading>
            <Flex center css={{ padding: '16px 0' }}>
              <Heading as='h4'>$6</Heading>
              <Text subText type='caption1' css={{ paddingLeft: '12px' }}>
                per month
              </Text>
            </Flex>
            <Anchor
              button
              theme='primary'
              css={{ maxHeight: '36px', marginBottom: '16px' }}
            >
              Sign up
            </Anchor>
          </HeaderCell>
          <HeaderCell>
            <Heading as='h3'>Pro</Heading>
            <Flex center css={{ padding: '16px 0' }}>
              <Heading as='h4'>$12</Heading>
              <Text subText type='caption1' css={{ paddingLeft: '12px' }}>
                per month
              </Text>
            </Flex>
          </HeaderCell>

          <RowHeaderCell>
            <Text>Usage</Text>
          </RowHeaderCell>
          <RowHeaderCell />
          <RowHeaderCell selected />
          <RowHeaderCell />

          <RowCell>
            <Text type='caption3'>Uploads limit</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell selected>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell>
            <Text type='caption3'>Users</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell selected>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>

          <RowHeaderCell>
            <Text>Features</Text>
          </RowHeaderCell>
          <RowHeaderCell />
          <RowHeaderCell selected />
          <RowHeaderCell />

          <RowCell>
            <Text type='caption3'>Posts</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell selected>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>
          <RowCell>
            <Icon icon='Tick' />
            <Text type='caption3'>Unlimited</Text>
          </RowCell>

          <SpacerCell />
          <SpacerCell />
          <SpacerCell selected bottom />
          <SpacerCell />
        </PricingComparison>
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'Components/GroupedComparisonGrid',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {}
