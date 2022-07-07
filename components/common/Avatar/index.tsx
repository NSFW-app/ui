import { ComponentProps } from '@stitches/react'
import { theme, styled } from 'lib/theme'
import { Box } from 'primitives/Box'
import { Image, ImageProps } from 'primitives/Image'
import { Profile as ProfileIcon } from 'common/Icon'

const AvatarWrapper = styled(Box, {
  position: 'relative',
  borderRadius: '100%',
  backgroundColor: 'transparent !important',
  variants: {
    size: {
      xxsmall: {
        height: '20px',
        width: '20px',
        minHeight: '20px',
        minWidth: '20px',
      },
      xsmall: {
        height: '36px',
        width: '36px',
        minHeight: '36px',
        minWidth: '36px',
      },
      small: {
        height: '48px',
        width: '48px',
        minHeight: '48px',
        minWidth: '48px',
      },
      medium: {
        height: '56px',
        width: '56px',
        minHeight: '56px',
        minWidth: '56px',
      },
      large: {
        height: '92px',
        width: '92px',
        minHeight: '92px',
        minWidth: '92px',
      },
    },
    status: {
      active: {
        border: '2px solid transparent',
        backgroundImage: theme.gradients.blue,
      },
      inactive: {
        border: `2px solid ${theme.colors.gray600}`,
        backgroundImage: 'none',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const iconScales = {
  xxsmall: 1,
  xsmall: 1.8,
  small: 2.4,
  medium: 2.8,
  large: 5,
}

export interface AvatarProps
  extends ComponentProps<typeof AvatarWrapper>,
    Pick<ImageProps, 'alt'> {
  src?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'medium',
  status,
  onClick,
  css,
}) => {
  return (
    <AvatarWrapper status={status} size={size} css={css} onClick={onClick}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          css={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '100%',
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        />
      ) : (
        <ProfileIcon
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${
              iconScales[size as keyof typeof iconScales]
            })`,
            // transformOrigin: '0 0',
            '& .primary.fill': {
              fill: theme.colors.gray800,
            },
          }}
        />
      )}
    </AvatarWrapper>
  )
}
