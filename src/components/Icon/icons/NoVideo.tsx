import { theme } from 'core/stitches'
import { Svg, SvgPath, SvgGroup } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const NoVideo: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='70'
    height='70'
    viewBox='0 -70 700 700'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgGroup>
      <SvgPath
        d='m99.875 5.125c-6.8359-6.832-17.914-6.832-24.75 0-6.832 6.8359-6.832 17.914 0 24.75l75.125 75.125h-27.75c-28.996 0-52.5 23.504-52.5 52.5v245c0 28.996 23.504 52.5 52.5 52.5h315c17.113 0 32.309-8.1875 41.895-20.855l115.45 115.45c6.8359 6.8359 17.918 6.8359 24.75 0 6.8359-6.832 6.8359-17.914 0-24.75z'
        className='primary fill'
        css={{
          fill: theme.colors.gray800,
          transition: theme.transitions.iconColor,
        }}
      />
      <SvgPath
        d='m549.68 418.87-2.8164-1.7578-312.11-312.11h202.75c28.996 0 52.5 23.504 52.5 52.5v20.926l59.676-37.297c34.965-21.855 80.324 3.2852 80.324 44.52v188.7c0 41.234-45.359 66.375-80.324 44.52z'
        css={{
          fill: theme.colors.gray800,
          transition: theme.transitions.iconColor,
        }}
      />
    </SvgGroup>
  </Svg>
)
