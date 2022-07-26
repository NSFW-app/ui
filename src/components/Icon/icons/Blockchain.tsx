import { theme } from 'core/stitches'
import { Svg, SvgRect } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Blockchain: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <g clipPath='url(#clip0_5_256)'>
      <SvgRect
        x='7.70711'
        y='26.2537'
        width='15.842'
        height='15.842'
        rx='3.46283'
        transform='rotate(-45 7.70711 26.2537)'
        className='primary stroke'
        css={{
          stroke: theme.colors.voilet100,
        }}
      />
      <SvgRect
        x='22.0931'
        y='40.6396'
        width='15.842'
        height='15.842'
        rx='3.46283'
        transform='rotate(-45 22.0931 40.6396)'
        stroke='#989898'
      />
      <SvgRect
        x='22.0931'
        y='11.9091'
        width='15.842'
        height='15.842'
        rx='3.46283'
        transform='rotate(-45 22.0931 11.9091)'
        className='primary stroke'
        css={{
          stroke: theme.colors.voilet100,
        }}
      />
    </g>
    <defs>
      <clipPath id='clip0_5_256'>
        <rect width='52' height='52' fill='white' />
      </clipPath>
    </defs>
  </Svg>
)
