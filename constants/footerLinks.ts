import { KnownIcon } from 'common/Icon'

export const FOOTER_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
]

interface FOOTER_SOCIAL_LINKS_PROPS {
  icon: KnownIcon
  href: string
}

export const FOOTER_SOCIAL_LINKS: FOOTER_SOCIAL_LINKS_PROPS[] = [
  { icon: 'Discord', href: 'https://discord.gg/XR8Ek4v7EM' },
  { icon: 'Twitter', href: 'https://twitter.com/PORNROCKET_' },
  { icon: 'Telegram', href: 'https://t.me/prnrocketbackup' },
]
