import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Tick: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M7 16.8009L11.0805 20.8814L22 10'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
