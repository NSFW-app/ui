import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Telegram: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='20px'
    height='20px'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM11.7812 5.5625L10.5312 11.5625C10.4375 12 10.1875 12.0938 9.8125 11.9062L7.875 10.4688L6.9375 11.375C6.84375 11.4688 6.75 11.5625 6.5625 11.5625L6.6875 9.59375L10.2812 6.34375C10.4375 6.21875 10.25 6.125 10.0312 6.25L5.59375 9.0625L3.6875 8.46875C3.28125 8.34375 3.28125 8.03125 3.78125 7.84375L11.25 4.96875C11.5938 4.84375 11.9062 5.0625 11.7812 5.5625Z'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary fill'
    />
  </Svg>
)
