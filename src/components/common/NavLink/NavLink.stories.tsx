import { ComponentProps, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { styled } from 'core/stitches'
import { StoryWrapper } from 'components/StoryWrapper'
import { Nav } from 'primitives/Nav'
import { NavLink } from '.'

const NavBar = styled(Nav, {
  backgroundColor: '$gray400',
})

interface TemplateProps extends ComponentProps<typeof NavLink> {
  type?: 'vertical' | 'horizontal'
}

const Template: Story<TemplateProps> = ({ type, withHighlight }) => {
  const [activeNav, setActiveNav] = useState<'fans' | 'creators' | 'faq'>(
    'fans'
  )
  return (
    <StoryWrapper>
      <NavBar
        type={type}
        css={type === 'vertical' ? { height: '300px' } : { height: '120px' }}
      >
        <NavLink
          highlightPosition={type}
          active={activeNav === 'fans'}
          onClick={() => setActiveNav('fans')}
          // href='#'
          withHighlight={withHighlight}
        >
          Fans
        </NavLink>
        <NavLink
          highlightPosition={type}
          active={activeNav === 'creators'}
          onClick={() => setActiveNav('creators')}
          // href='#'
          withHighlight={withHighlight}
        >
          Creators
        </NavLink>
        <NavLink
          highlightPosition={type}
          active={activeNav === 'faq'}
          onClick={() => setActiveNav('faq')}
          // href='#'
          withHighlight={withHighlight}
        >
          FAQs
        </NavLink>
      </NavBar>
    </StoryWrapper>
  )
}

export default {
  title: 'Common/NavLink',
  component: Template,
} as Meta

export const Horizontal = Template.bind({})
Horizontal.args = {
  type: 'horizontal',
  withHighlight: false,
}

export const Vertical = Template.bind({})
Vertical.args = {
  type: 'vertical',
  withHighlight: false,
}
