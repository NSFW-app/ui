import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Heart: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M4.31802 6.23794C2.56066 7.9953 2.56066 10.8445 4.31802 12.6019L12.0001 20.2839L19.682 12.6019C21.4393 10.8445 21.4393 7.9953 19.682 6.23794C17.9246 4.48058 15.0754 4.48058 13.318 6.23794L12.0001 7.55601L10.682 6.23794C8.92462 4.48058 6.07538 4.48058 4.31802 6.23794Z'
      strokeLinecap='round'
      strokeLinejoin='round'
      css={{
        stroke: theme.colors.gray800,
        transition: theme.transitions.iconColor,
      }}
      className='primary stroke'
    />
  </Svg>
)
