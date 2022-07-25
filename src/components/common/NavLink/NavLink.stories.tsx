import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { styled } from 'core/stitches'
import { StoryWrapper } from 'components/StoryWrapper'
import { Nav } from 'primitives/Nav'
import { NavLink } from '.'

const NavBar = styled(Nav, {
  backgroundColor: '$gray400',
})

interface TemplateProps {
  type?: 'vertical' | 'horizontal'
}
const Template: Story<TemplateProps> = ({ type }) => {
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
          href='#'
        >
          Fans
        </NavLink>
        <NavLink
          highlightPosition={type}
          active={activeNav === 'creators'}
          onClick={() => setActiveNav('creators')}
          href='#'
        >
          Creators
        </NavLink>
        <NavLink
          highlightPosition={type}
          active={activeNav === 'faq'}
          onClick={() => setActiveNav('faq')}
          href='#'
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

export const Vertical = Template.bind({})
Vertical.args = {
  type: 'vertical',
}
