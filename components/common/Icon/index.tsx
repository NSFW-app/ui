import { CSSProp, keyframes, styled } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import * as icons from './icons'

export type KnownIcon = keyof typeof icons

export interface IconProps extends CSSProp {
  icon: KnownIcon
  rotate?: number
  spin?: boolean
}

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const IconContainer = styled(Flex, {
  backgroundColor: 'transparent !important',
  justifyContent: 'center',
  alignItems: 'center',
})

export const IconComponent: React.FC<IconProps> = ({
  icon,
  rotate = 0,
  css,
}) => {
  const IconFC = icons[icon]
  return (
    <IconFC
      css={{
        ...(rotate && { transform: `rotate(${rotate}deg)` }),
        ...css,
      }}
    />
  )
}

export const Icon: React.FC<IconProps> = ({ icon, spin, rotate = 0, css }) => {
  return (
    <IconContainer css={css}>
      <IconComponent
        icon={icon}
        rotate={rotate}
        css={{
          ...(spin ? { animation: `${rotation} 1s linear infinite` } : {}),
          ...(css?.height || css?.width
            ? // If implementor is setting width & height set SVG to 100% so it pertains to the size
              {
                height: '100%',
                width: '100%',
              }
            : {}),
        }}
      />
    </IconContainer>
  )
}

export * from './icons'
