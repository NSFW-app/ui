import { theme } from 'lib/theme'
import { Svg, SvgGroup, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Muted: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='18'
    height='18'
    viewBox='0 0 650 550'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgGroup>
      <SvgPath
        d='m378.63 62.957c-5.8008-2.7109-12.656-1.8203-17.578 2.3086l-137.77 115.48-108.81 0.17969c-9.1016 0.015624-16.473 7.3984-16.473 16.5v165.16c0 9.1094 7.3867 16.496 16.496 16.496h108.79l137.76 115.64c3.0312 2.543 6.8047 3.8633 10.605 3.8633 2.3672 0 4.75-0.50781 6.9648-1.5469 5.8125-2.7109 9.5312-8.5391 9.5312-14.953v-404.19c0-6.4102-3.7109-12.242-9.5234-14.949zm-23.477 383.74-115.25-96.75c-2.9688-2.4961-6.7266-3.8633-10.605-3.8633h-98.301v-132.19l98.32-0.15625c3.8711-0.003907 7.6172-1.3711 10.578-3.8516l115.26-96.625z'
        className='primary fill'
        css={{
          fill: theme.colors.gray800,
          transition: theme.transitions.iconColor,
        }}
      />
      <SvgPath
        d='m535.83 292.23 61.336-61.332c6.4453-6.4414 6.4453-16.891 0-23.336-6.4414-6.4453-16.895-6.4453-23.336 0l-61.332 61.332-61.336-61.324c-6.4531-6.4453-16.895-6.4414-23.336 0-6.4453 6.4453-6.4453 16.891 0 23.336l61.336 61.332-61.336 61.316c-6.4453 6.4414-6.4453 16.891 0 23.336 3.2188 3.2188 7.4414 4.832 11.664 4.832 4.2227 0 8.4453-1.6055 11.664-4.832l61.344-61.332 61.332 61.332c3.2266 3.2188 7.4414 4.832 11.664 4.832s8.4453-1.6133 11.664-4.832c6.4453-6.4453 6.4453-16.891 0-23.336z'
        className='primary fill'
        css={{
          fill: theme.colors.gray800,
          transition: theme.transitions.iconColor,
        }}
      />
    </SvgGroup>
  </Svg>
)
