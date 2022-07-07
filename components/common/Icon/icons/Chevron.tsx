import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'
import { theme } from 'lib/theme'

export const Chevron: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='8'
    height='14'
    viewBox='0 0 7 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M1 13L7 7L1 1'
      className='primary stroke'
      css={{
        stroke: theme.colors.gray800,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
