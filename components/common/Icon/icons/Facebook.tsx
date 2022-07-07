import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Facebook: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    fill='#000000'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 30'
    width='30px'
    height='30px'
    css={css}
  >
    <SvgPath
      d='M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary fill'
    />
  </Svg>
)
