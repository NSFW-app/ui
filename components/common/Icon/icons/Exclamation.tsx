import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Exclamation: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='22'
    height='22'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M8 5V8V5ZM8 11H8.0075H8ZM14.75 8C14.75 11.728 11.728 14.75 8 14.75C4.27208 14.75 1.25 11.728 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.728 1.25 14.75 4.27208 14.75 8Z'
      stroke='#898EA2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='primary stroke'
      css={{ stroke: theme.colors.gray800 }}
    />
  </Svg>
)
