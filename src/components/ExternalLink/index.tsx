import React from 'react'

import { Anchor } from 'primitives/Anchor'
import { ComponentProps } from '@stitches/react'
import { Text } from 'primitives/Text'
import { Icon } from 'components/Icon'

export interface LinkProps extends ComponentProps<typeof Anchor> {
  label: string
  type: 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2' | 'caption3'
}

export const ExternalLink: React.FC<LinkProps> = ({
  css = {},
  href,
  label,
  type,
}) => {
  return (
    <Anchor
      css={{
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'none',
        cursor: 'pointer',
        gap: '5px',
      }}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <Text type={type} css={{ ...css }}>
        {label}
      </Text>
      <Icon
        icon='ExternalLink'
        css={{
          alignSelf: 'center',
          height: 16,
          minWidth: 16,
          strokeWidth: '4px',
          '& .primary.fill': {
            fill: '$gray800',
            stroke: '$gray800',
            strokeWidth: '1px',
          },
        }}
      />
    </Anchor>
  )
}
