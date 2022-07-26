import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const EyeOpen: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M7.99989 9.60002C8.88357 9.60002 9.5999 8.8837 9.5999 8.00002C9.5999 7.11637 8.88357 6.40002 7.99989 6.40002C7.11625 6.40002 6.3999 7.11637 6.3999 8.00002C6.3999 8.8837 7.11625 9.60002 7.99989 9.60002Z'
      className='primary fill'
      css={{
        fill: theme.colors.voilet100,
      }}
    />
    <SvgPath
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.366211 8.00002C1.38562 4.75435 4.41786 2.40002 7.99998 2.40002C11.5821 2.40002 14.6143 4.75433 15.6338 7.99999C14.6143 11.2457 11.5821 13.6 7.99996 13.6C4.41786 13.6 1.38563 11.2457 0.366211 8.00002ZM11.2 8.00002C11.2 9.7673 9.76728 11.2 8 11.2C6.2327 11.2 4.80001 9.7673 4.80001 8.00002C4.80001 6.23271 6.2327 4.80002 8 4.80002C9.76728 4.80002 11.2 6.23271 11.2 8.00002Z'
      className='primary fill'
      css={{
        fill: theme.colors.voilet100,
      }}
    />
  </Svg>
)
