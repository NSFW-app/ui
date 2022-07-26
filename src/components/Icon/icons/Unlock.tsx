import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Unlock: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='16'
    height='20'
    viewBox='0 0 16 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary fill'
      d='M14 8H5V5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5H13C13 2.243 10.757 0 8 0C5.243 0 3 2.243 3 5V8H2C0.896 8 0 8.896 0 10V18C0 19.104 0.896 20 2 20H5H7H9H12H14C15.104 20 16 19.104 16 18V10C16 8.896 15.104 8 14 8ZM6.061 13.499C6.237 12.779 6.841 12.197 7.566 12.046C8.861 11.774 10 12.753 10 14C10 14.739 9.596 15.377 9 15.723V18H7V15.723C6.273 15.301 5.831 14.444 6.061 13.499Z'
      fill='white'
    />
  </Svg>
)
