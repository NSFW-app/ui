import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const More: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M12 17.4199C12.8285 17.4199 13.5 18.0915 13.5 18.9199C13.5 19.7484 12.8285 20.4199 12 20.4199C11.1716 20.4199 10.5 19.7483 10.5 18.9199C10.5 18.0915 11.1716 17.4199 12 17.4199ZM12 11.4199C12.8285 11.4199 13.5 12.0915 13.5 12.9199C13.5 13.7484 12.8285 14.4199 12 14.4199C11.1716 14.4199 10.5 13.7483 10.5 12.9199C10.5 12.0915 11.1716 11.4199 12 11.4199ZM12 5.41992C12.8285 5.41992 13.5 6.09146 13.5 6.91992C13.5 7.74838 12.8285 8.41992 12 8.41992C11.1716 8.41992 10.5 7.74837 10.5 6.91992C10.5 6.09147 11.1716 5.41992 12 5.41992Z'
      css={{
        stroke: theme.colors.gray800,
        transition: theme.transitions.iconColor,
        fill: 'transparent !important',
      }}
      className='primary stroke'
    />
  </Svg>
)
