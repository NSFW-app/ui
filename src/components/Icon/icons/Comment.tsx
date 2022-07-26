import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Comment: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M8 12.9199H8.01H8ZM12 12.9199H12.01H12ZM16 12.9199H16.01H16ZM21 12.9199C21 17.3382 16.9706 20.9199 12 20.9199C10.4607 20.9199 9.01172 20.5764 7.74467 19.971L3 20.9199L4.39499 17.1999C3.51156 15.9622 3 14.4942 3 12.9199C3 8.50164 7.02944 4.91992 12 4.91992C16.9706 4.91992 21 8.50164 21 12.9199Z'
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
