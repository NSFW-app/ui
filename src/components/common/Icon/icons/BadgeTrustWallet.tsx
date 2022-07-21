import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const BadgeTrustWallet: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M11.3384 21.6769C17.0482 21.6769 21.6769 17.0482 21.6769 11.3385C21.6769 5.62869 17.0482 1 11.3384 1C5.62863 1 0.999939 5.62869 0.999939 11.3385C0.999939 17.0482 5.62863 21.6769 11.3384 21.6769Z'
      className='primary fill'
      fill='#3375BB'
    />
    <SvgPath
      d='M11.5893 7C13.1087 8.26894 14.8511 8.19069 15.3489 8.19069C15.24 15.4075 14.4103 13.9764 11.5893 16C8.76832 13.9764 7.94381 15.4075 7.8349 8.19069C8.32755 8.19069 10.0699 8.26894 11.5893 7Z'
      stroke='white'
      strokeWidth='0.961025'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
