import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Swap: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      css={css}
    >
      <SvgPath
        d='M2.33334 9.91667L4.66668 7.58333M4.66668 4.08333H11.6667H4.66668ZM11.6667 4.08333L9.33334 1.75L11.6667 4.08333ZM11.6667 4.08333L9.33334 6.41667L11.6667 4.08333ZM9.33334 9.91667H2.33334H9.33334ZM2.33334 9.91667L4.66668 12.25L2.33334 9.91667Z'
        className='primary stroke'
        css={{
          stroke: theme.colors.gray900,
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
