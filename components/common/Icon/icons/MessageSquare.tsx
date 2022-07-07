import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const MessageSquare: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='17'
    height='17'
    viewBox='0 0 17 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M14.45 0H2.55C1.8737 0 1.2251 0.26866 0.746878 0.746878C0.26866 1.2251 0 1.8737 0 2.55V15.3C0.000259553 15.4506 0.0405355 15.5985 0.116705 15.7284C0.192875 15.8583 0.302204 15.9657 0.4335 16.0395C0.560537 16.1115 0.70398 16.1496 0.85 16.15C1.00256 16.15 1.1523 16.1089 1.2835 16.031L5.1 13.719C5.24107 13.635 5.40344 13.5937 5.5675 13.6H14.45C15.1263 13.6 15.7749 13.3313 16.2531 12.8531C16.7313 12.3749 17 11.7263 17 11.05V2.55C17 1.8737 16.7313 1.2251 16.2531 0.746878C15.7749 0.26866 15.1263 0 14.45 0ZM5.1 7.65C4.93189 7.65 4.76755 7.60015 4.62777 7.50675C4.48798 7.41335 4.37904 7.2806 4.3147 7.12528C4.25037 6.96996 4.23354 6.79906 4.26633 6.63417C4.29913 6.46929 4.38008 6.31783 4.49896 6.19896C4.61783 6.08008 4.76929 5.99913 4.93417 5.96633C5.09906 5.93353 5.26996 5.95037 5.42528 6.0147C5.5806 6.07904 5.71335 6.18798 5.80675 6.32776C5.90015 6.46755 5.95 6.63189 5.95 6.8C5.95 7.02543 5.86045 7.24163 5.70104 7.40104C5.54164 7.56045 5.32543 7.65 5.1 7.65ZM8.5 7.65C8.33189 7.65 8.16755 7.60015 8.02777 7.50675C7.88798 7.41335 7.77904 7.2806 7.7147 7.12528C7.65037 6.96996 7.63354 6.79906 7.66633 6.63417C7.69913 6.46929 7.78009 6.31783 7.89896 6.19896C8.01783 6.08008 8.16929 5.99913 8.33417 5.96633C8.49906 5.93353 8.66996 5.95037 8.82528 6.0147C8.9806 6.07904 9.11335 6.18798 9.20675 6.32776C9.30015 6.46755 9.35 6.63189 9.35 6.8C9.35 7.02543 9.26045 7.24163 9.10104 7.40104C8.94164 7.56045 8.72543 7.65 8.5 7.65ZM11.9 7.65C11.7319 7.65 11.5675 7.60015 11.4278 7.50675C11.288 7.41335 11.179 7.2806 11.1147 7.12528C11.0504 6.96996 11.0335 6.79906 11.0663 6.63417C11.0991 6.46929 11.1801 6.31783 11.299 6.19896C11.4178 6.08008 11.5693 5.99913 11.7342 5.96633C11.8991 5.93353 12.07 5.95037 12.2253 6.0147C12.3806 6.07904 12.5134 6.18798 12.6068 6.32776C12.7001 6.46755 12.75 6.63189 12.75 6.8C12.75 7.02543 12.6604 7.24163 12.501 7.40104C12.3416 7.56045 12.1254 7.65 11.9 7.65Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
