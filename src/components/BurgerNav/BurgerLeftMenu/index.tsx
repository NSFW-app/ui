import { Icon } from 'components/Icon'
import { ComponentProps, styled, theme } from 'core/stitches'
import { Anchor } from 'primitives/Anchor'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'
import { SOCIAL_LINKS } from 'utils/constants'

export const BurgerLeftMenuItems = styled(Flex, {
  flexDirection: 'column',
  gap: '30px',
  marginBottom: '8px',
})

interface BurgerLeftMenuProps extends ComponentProps<typeof Box> {}
export const BurgerLeftMenu: React.FC<BurgerLeftMenuProps> = () => {
  return (
    <BurgerLeftMenuItems>
      {SOCIAL_LINKS.map(({ icon, href }) => (
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
