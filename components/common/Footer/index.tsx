import { ComponentProps } from '@stitches/react'
import { Link } from 'common/Link'
import { Nav } from 'primitives/Nav'
import { Footer as FooterPrimitive } from 'primitives/Footer'
import { Text } from 'primitives/Text'
import { List } from 'primitives/List'
import { ListItem } from 'primitives/ListItem'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from 'constants/footerLinks'
import { Icon, KnownIcon } from 'common/Icon'
import { Anchor } from 'primitives/Anchor'
import appVersion from 'lib/nextjs/appVersion'
import { useStore } from 'lib/store'
import { NSFW_EVENT } from 'lib/tracking/types'

export interface FooterProps extends ComponentProps<typeof FooterPrimitive> {}

export const Footer: React.FC<FooterProps> = ({ css }) => {
  const store = useStore()
  const handleSocialLinksTracking = (icon: KnownIcon) => {
    switch (icon) {
      case 'Discord':
        return store.analytics.track(NSFW_EVENT.FOOTER_DISCORD_CLICK)
      case 'Twitter':
        return store.analytics.track(NSFW_EVENT.FOOTER_TWITTER_CLICK)
      case 'Telegram':
        return store.analytics.track(NSFW_EVENT.FOOTER_TELEGRAM_CLICK)
      default:
        return
    }
  }
  const handleFooterLinksTracking = (name: string) => {
    switch (name) {
      case 'Privacy Policy':
        return store.analytics.track(NSFW_EVENT.FOOTER_PRIVACY_POLICY_CLICK)
      default:
        return
    }
  }
  return (
    <FooterPrimitive
      css={{
        backgroundColor: theme.colors.gray500,
        borderTop: `1px solid ${theme.colors.gray400}`,
        width: '100%',
        ...css,
      }}
    >
      <Flex
        css={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          transition: 'all 200ms ease',
          justifyContent: 'space-between',
          '@md': {
            padding: '0 40px',
          },
          '@xxl': {
            padding: '0 calc(50vw - 664px)',
          },
        }}
      >
        {' '}
        <Text
          css={{
            fontSize: '11px',
            lineHeight: '16px',
            color: theme.colors.gray800,

            display: 'none',
            '@lg': {
              display: 'block',
            },
          }}
        >
          v{appVersion()} &copy; {new Date().getFullYear()} NSFW.app
        </Text>
        <List
          horizontal
          css={{
            gap: '15px',
            width: 'auto',
            padding: '10px',
            '@lg': {
              width: '220px',
            },
          }}
        >
          {FOOTER_SOCIAL_LINKS.map(({ icon, href }) => (
            <Anchor
              key={href}
              onClick={() => handleSocialLinksTracking(icon)}
              rel='noopener noreferrer'
              target='_blank'
              href={href}
            >
              <Icon icon={icon} css={{ height: '22px', width: '22px' }} />
            </Anchor>
          ))}
        </List>
        <Nav>
          <List horizontal css={{ gap: '15px' }}>
            {FOOTER_LINKS.map(({ name, href }) => (
              <ListItem
                key={href}
                onClick={() => handleFooterLinksTracking(name)}
              >
                <Link
                  href={href}
                  theme='text'
                  css={{
                    fontSize: '11px',
                    lineHeight: '16px',
                  }}
                >
                  {name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Nav>
      </Flex>
    </FooterPrimitive>
  )
}
