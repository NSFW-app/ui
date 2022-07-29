import { Icon } from 'components/Icon'
import { ComponentProps, styled, theme } from 'core/stitches'
import { SOCIAL_LINKS_PROPS } from 'core/types'
import { Anchor } from 'primitives/Anchor'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'

export const BurgerLeftMenuItems = styled(Flex, {
  flexDirection: 'column',
  gap: '30px',
  marginBottom: '8px',
})

interface BurgerLeftMenuProps extends ComponentProps<typeof Box> {
  socialLinks: SOCIAL_LINKS_PROPS[]
}
export const BurgerLeftMenu: React.FC<BurgerLeftMenuProps> = ({
  socialLinks,
}) => {
  return (
    <BurgerLeftMenuItems>
      {socialLinks.map(({ icon, href }) => (
        <Anchor
          css={{ border: 'none !important' }}
          key={href}
          rel='noopener noreferrer'
          target='_blank'
          href={href}
        >
          <Icon
            icon={icon}
            css={{
              height: '22px',
              width: '22px',
              '& .primary.fill': {
                fill: theme.colors.gray800,
              },
              ':active': {
                '& .primary.fill': {
                  fill: theme.colors.gray900,
                },
              },
            }}
          />
        </Anchor>
      ))}
    </BurgerLeftMenuItems>
  )
}
