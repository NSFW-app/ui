import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Bell: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='14'
    height='16'
    viewBox='0 0 14 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M7 0C3.68632 0 1.00003 2.68629 1.00003 6V9.5858L0.292921 10.2929C0.00692052 10.5789 -0.0786296 11.009 0.0761504 11.3827C0.23093 11.7564 0.595571 12 1.00003 12H13C13.4045 12 13.7691 11.7564 13.9239 11.3827C14.0787 11.009 13.9931 10.5789 13.7071 10.2929L13 9.5858V6C13 2.68629 10.3137 0 7 0ZM7 16C5.34315 16 4 14.6569 4 13H10C10 14.6569 8.6569 16 7 16Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
