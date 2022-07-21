import { Icon } from 'common/Icon'
import { CSS, theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'

export interface FeatureHighlightProps {
  css?: CSS
}

export const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  children,
  css = {},
}) => {
  return (
    <Flex
      css={{
        border: `1px solid ${theme.colors.gray400}`,
        color: theme.colors.gray800,
        alignItems: 'center',
        borderRadius: '8px',
        padding: '20px',
        ...css,
      }}
    >
      <Icon
        icon='Asterisk'
        css={{
          marginRight: '12px',
          height: '14px',
          width: '14px',
        }}
      />
      {children}
    </Flex>
  )
}
