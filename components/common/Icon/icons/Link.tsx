import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Link: React.FC<SvgIconProps> = ({ css }) => (
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
      d='M6.66667 5H12C12.9205 5 13.6667 5.74619 13.6667 6.66667V9.33333H12C10.5273 9.33333 9.33337 10.5272 9.33337 12V13.6667H6.66667C5.74619 13.6667 5 12.9205 5 12V6.66667C5 5.74619 5.74619 5 6.66667 5ZM9.33337 14.6667H6.66667C5.19391 14.6667 4 13.4728 4 12V6.66667C4 5.19391 5.19391 4 6.66667 4H12C13.4728 4 14.6667 5.19391 14.6667 6.66667V9.33333H17.3334C18.8061 9.33333 20 10.5272 20 12V17.3333C20 18.8061 18.8061 20 17.3334 20H12C10.5273 20 9.33337 18.8061 9.33337 17.3333V14.6667ZM14.6667 10.3333H17.3334C18.2538 10.3333 19 11.0795 19 12V17.3333C19 18.2538 18.2538 19 17.3334 19H12C11.0796 19 10.3334 18.2538 10.3334 17.3333V14.6667H12C13.4728 14.6667 14.6667 13.4728 14.6667 12V10.5V10.3333ZM13.6667 10.3333V10.5V12C13.6667 12.9205 12.9205 13.6667 12 13.6667H10.3334V12C10.3334 11.0795 11.0796 10.3333 12 10.3333H13.6667Z'
      fill='white'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
      className='primary fill'
    />
  </Svg>
)
