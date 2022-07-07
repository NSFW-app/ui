import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Add: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M8 2V14'
      strokeWidth='0.704348'
      strokeLinecap='round'
      strokeLinejoin='round'
      css={{
        stroke: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary stroke'
    />
    <SvgPath
      d='M14 7.94434H2'
      strokeWidth='0.704348'
      strokeLinecap='round'
      strokeLinejoin='round'
      css={{
        stroke: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary stroke'
    />
  </Svg>
)
