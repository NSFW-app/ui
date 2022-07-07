import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Reply: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M5.00005 9.95833H13.2639C16.9152 9.95833 19.875 12.9182 19.875 16.5694V18.2222C19.875 10.7847 16.1563 9.13194 5.00005 9.95833ZM5.00005 9.95833L9.95838 14.9167M5.00005 9.95833L9.95838 5'
      stroke='#898EA2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
