import { ComponentProps } from '@stitches/react'
import { theme } from 'lib/theme'
import { Box } from 'primitives/Box'
import { Text } from 'primitives/Text'
import { Link } from '../Link'

export interface MetricLinkProps
  extends Omit<ComponentProps<typeof Link>, 'href'> {
  title?: string
  value?: string | number
  href?: string
}

const metricLinkCss = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
  width: '100%',
  backgroundColor: theme.colors.gray300,
  borderRadius: '8px',
  textDecoration: 'none',
  minWidth: '100px',
}

export const MetricLink: React.FC<MetricLinkProps> = ({
  title,
  value,
  css,
  href,
  children,
}) => {
  const styles = { ...metricLinkCss, ...css }
  const content = (
    <>
      <Text type='body3' css={{ fontWeight: '600', lineHeight: '16px' }}>
        {value}
      </Text>
      <Text type='body4' css={{ color: theme.colors.gray800 }}>
        {title}
      </Text>
    </>
  )
  return (
    // Next Link throw if href undefined, so using a ternary instead
    href ? (
      <Link css={styles} href={href}>
        {children || content}
      </Link>
    ) : (
      <Box css={styles}>{children || content}</Box>
    )
  )
}
