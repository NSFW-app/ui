import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const List: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.80005 5.79999H18.2L18.2 10.2L5.80005 10.2V5.79999ZM4.80005 5.79999C4.80005 5.2477 5.24776 4.79999 5.80005 4.79999H18.2C18.7523 4.79999 19.2 5.2477 19.2 5.79999V10.2C19.2 10.7523 18.7523 11.2 18.2 11.2H5.80005C5.24776 11.2 4.80005 10.7523 4.80005 10.2V5.79999ZM5.80005 13.8H18.2L18.2 18.2L5.80005 18.2V13.8ZM4.80005 13.8C4.80005 13.2477 5.24776 12.8 5.80005 12.8H18.2C18.7523 12.8 19.2 13.2477 19.2 13.8V18.2C19.2 18.7523 18.7523 19.2 18.2 19.2H5.80005C5.24776 19.2 4.80005 18.7523 4.80005 18.2V13.8Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray800,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
