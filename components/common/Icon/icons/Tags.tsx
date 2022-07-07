import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Tags: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      css={css}
    >
      <SvgPath
        d='M19.9081 41.9814L17.6723 43.472C15.3965 44.9891 12.3217 44.3742 10.8046 42.0984C10.5944 41.7832 10.4212 41.4449 10.2881 41.0902L6.49952 30.9872C5.66031 28.7493 6.53914 26.2314 8.5886 25.0017L29.8128 12.2672'
        stroke='#989898'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <SvgPath
        fillRule='evenodd'
        clipRule='evenodd'
        d='M33.3149 9.79099H42.1939C44.9291 9.79099 47.1463 12.0082 47.1463 14.7434V23.6225C47.1463 24.2792 46.8854 24.909 46.4211 25.3734L28.3625 43.432C26.4284 45.366 23.2928 45.366 21.3587 43.432L13.5053 35.5786C11.5713 33.6445 11.5713 30.5089 13.5053 28.5748L31.5639 10.5162C32.0283 10.0519 32.6581 9.79099 33.3149 9.79099V9.79099Z'
        className='primary stroke'
        css={{
          stroke: theme.colors.voilet100,
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <SvgPath
        d='M43.4324 15.9813C43.4324 14.6138 42.3237 13.5051 40.9562 13.5051C39.5886 13.5051 38.48 14.6138 38.48 15.9813C38.48 17.3489 39.5886 18.4575 40.9562 18.4575C42.3237 18.4575 43.4324 17.3489 43.4324 15.9813Z'
        className='primary fill'
        css={{
          fill: theme.colors.voilet100,
        }}
      />
    </Svg>
  )
}
