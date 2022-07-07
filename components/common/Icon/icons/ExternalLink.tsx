import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const ExternalLink: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='15'
    height='15'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    css={css}
  >
    <SvgPath
      d='M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z'
      className='primary stroke'
      css={{ stroke: theme.colors.voilet100 }}
    />
  </Svg>
)
