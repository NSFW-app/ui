import { theme } from 'lib/theme'
import { Svg, SvgGroup, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Fullscreen: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='34'
    height='34'
    viewBox='-10 0 700 550'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgGroup>
      <SvgPath
        d='m249.2 179.2h72.801v-22.398h-95.199v95.199h22.398zm201.6 0v72.801h22.398v-95.199h-95.199v22.398zm-201.6 128.8h-22.398v95.199h95.199v-22.398h-72.801zm128.8 72.801v22.398h95.199v-95.199h-22.398v72.801z'
        className='primary fill'
        css={{
          fill: theme.colors.gray800,
          transition: theme.transitions.iconColor,
        }}
      />
    </SvgGroup>
  </Svg>
)
