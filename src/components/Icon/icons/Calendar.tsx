import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Calendar: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M6 5.25V2.25V5.25ZM12 5.25V2.25V5.25ZM5.25 8.25H12.75H5.25ZM3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V5.25C15.75 4.42157 15.0784 3.75 14.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75Z'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
