import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Arrow: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M15.75 9H2.25M10.5 3.75L15.75 9L10.5 3.75ZM15.75 9L10.5 14.25L15.75 9Z'
      className='primary stroke'
      css={{
        stroke: '#FFF',
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
