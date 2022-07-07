import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Play: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M13.2238 8.52684C13.5682 8.74826 13.5682 9.25174 13.2238 9.47316L5.92918 14.1625C5.55483 14.4032 5.0625 14.1344 5.0625 13.6894V4.31062C5.0625 3.86559 5.55482 3.59681 5.92918 3.83746L13.2238 8.52684L13.5279 8.05367L13.2238 8.52684Z'
      fill='white'
      stroke='white'
      strokeWidth='1.125'
      className='primary stroke fill'
      css={{
        stroke: theme.colors.gray900,
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
