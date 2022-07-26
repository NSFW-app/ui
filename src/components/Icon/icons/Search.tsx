import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Search: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='19'
    height='19'
    viewBox='0 0 19 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M8 15.9999C9.846 15.9999 11.543 15.3649 12.897 14.3119L17.293 18.7079L18.707 17.2939L14.311 12.8979C15.365 11.5429 16 9.84591 16 7.99991C16 3.58891 12.411 -9.15527e-05 8 -9.15527e-05C3.589 -9.15527e-05 0 3.58891 0 7.99991C0 12.4109 3.589 15.9999 8 15.9999ZM8 1.99991C11.309 1.99991 14 4.69091 14 7.99991C14 11.3089 11.309 13.9999 8 13.9999C4.691 13.9999 2 11.3089 2 7.99991C2 4.69091 4.691 1.99991 8 1.99991Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
