import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const BadgeEthereum: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    viewBox='0 0 48 48'
    width='48px'
    height='48px'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath fill='#9fa8da' d='M11 24L25 2 39 24 25 32z' />
    <SvgPath fill='#7986cb' d='M25 2L39 24 25 32z' />
    <SvgPath fill='#9fa8da' d='M11 27L25 35 39 27 25 46z' />
    <SvgPath fill='#7986cb' d='M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z' />
    <SvgPath fill='#5c6bc0' d='M25 18L39 24 25 32z' />
  </Svg>
)
