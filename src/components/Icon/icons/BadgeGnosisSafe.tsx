import { Svg, SvgPath, SvgCircle } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const BadgeGnosisSafe: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='32'
    height='32'
    viewBox='0 0 280 280'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgCircle
      xmlns='http://www.w3.org/2000/svg'
      className='primary fill'
      css={{
        fill: '$gray900',
      }}
      cx='140'
      cy='140'
      r='140'
    />
    <SvgPath d='M137,9.84A128.75,128.75,0,1,0,265.7,138.59,128.76,128.76,0,0,0,137,9.84Zm94.23,135.78H171.44a36.38,36.38,0,1,1,.28-12.66h59.46a6.33,6.33,0,0,1,0,12.66Z' />
    <SvgCircle
      xmlns='http://www.w3.org/2000/svg'
      className='primary fill'
      css={{
        fill: '$gray900',
      }}
      cx='140'
      cy='140'
      r='40'
    />
  </Svg>
)
