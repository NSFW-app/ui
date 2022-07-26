import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Cross: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M7.5 7.5L16.584 16.584'
      css={{
        stroke: theme.colors.gray900,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <SvgPath
      d='M16.5 7.5L7.5 16.5'
      css={{
        stroke: theme.colors.gray900,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
