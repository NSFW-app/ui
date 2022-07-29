import { useEffect, useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Box } from 'primitives/Box'
import { BurgerMenu, BurgerRightMenuItems } from '.'
import { BurgerLeftMenu } from './BurgerLeftMenu'
import { IconProps } from 'components/Icon'
import { NavLink } from 'components/NavLink'

import Hamburger from 'hamburger-react'

interface TemplateProps {}
interface SocialLinkProps {
  icon: IconProps['icon']
  href: string
}

const SOCIAL_LINKS: SocialLinkProps[] = [
  { icon: 'Discord', href: 'https://discord.gg/XR8Ek4v7EM' },
  { icon: 'Twitter', href: 'https://twitter.com/PORNROCKET_' },
  { icon: 'Telegram', href: 'https://t.me/prnrocketbackup' },
  {
    icon: 'Notion',
    href:
      'https://nsfwapp.notion.site/NSFW-DAO-bb16149cf78648c1a157b086ab64b628',
  },
]

const Template: Story<TemplateProps> = ({ ...args }) => {
  const appContainerRef = useRef<HTMLElement | undefined>()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!appContainerRef.current) {
      appContainerRef.current = window.document.querySelector('#__next') as
        | HTMLElement
        | undefined
    }
  })
  return (
    <Box>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        size={20}
        duration={0.2}
        color='#FFF'
        rounded
      />

      <BurgerMenu
        opened={isOpen}
        onClose={() => console.log('close')}
        onOpen={() => console.log('close')}
        appContainerRef={appContainerRef}
        {...args}
      >
        <BurgerLeftMenu socialLinks={SOCIAL_LINKS} />
        <BurgerRightMenuItems>
          <NavLink highlightPosition='vertical' active>
            Fans
          </NavLink>

          <NavLink highlightPosition='vertical'>Creators</NavLink>

          <NavLink highlightPosition='vertical'>FAQs</NavLink>

          <NavLink highlightPosition='vertical'>Launch App</NavLink>
        </BurgerRightMenuItems>
      </BurgerMenu>
    </Box>
  )
}

export default {
  title: 'Components/BurgerNav',
  component: Template,
} as Meta

export const Example = Template.bind({})
Example.args = {}
