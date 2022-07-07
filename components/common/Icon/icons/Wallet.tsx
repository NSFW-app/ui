import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Wallet: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='18'
    height='16'
    viewBox='0 0 18 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M16.2141 3.375H2.8125C2.50172 3.375 2.25 3.12328 2.25 2.8125C2.25 2.50172 2.50172 2.25 2.8125 2.25H16.3125C16.6233 2.25 16.875 1.99828 16.875 1.6875C16.875 0.755508 16.1195 0 15.1875 0H2.25C1.00723 0 0 1.00723 0 2.25V13.5C0 14.7428 1.00723 15.75 2.25 15.75H16.2141C17.1991 15.75 18 14.9931 18 14.0625V5.0625C18 4.13191 17.1991 3.375 16.2141 3.375ZM14.625 10.6875C14.0038 10.6875 13.5 10.1837 13.5 9.5625C13.5 8.94129 14.0038 8.4375 14.625 8.4375C15.2462 8.4375 15.75 8.94129 15.75 9.5625C15.75 10.1837 15.2462 10.6875 14.625 10.6875Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
