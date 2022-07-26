import { ComponentProps } from '@stitches/react'
import { Icon } from 'components/Icon'
import { theme } from 'core/stitches'
import { Box } from 'primitives/Box'

export interface NoAssetFallbackProps extends ComponentProps<typeof Box> {
  assetType?: 'image' | 'video'
  iconProps?: Partial<ComponentProps<typeof Icon>>
}

export const NoAssetFallback: React.FC<NoAssetFallbackProps> = ({
  css,
  iconProps,
  assetType = 'image',
}) => {
  console.log(assetType)
  return (
    <Box
      css={{
        backgroundColor: theme.colors.gray300,
        height: '0px',
        overflow: 'hidden',
        paddingBottom: '100%',
        position: 'relative',
        ...css,
      }}
    >
      <Icon
        icon={assetType === 'video' ? 'NoVideo' : 'NoImage'}
        {...iconProps}
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100%',
          width: '40%',
          ...iconProps?.css,
        }}
      />
    </Box>
  )
}
