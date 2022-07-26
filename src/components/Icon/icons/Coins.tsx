import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Coins: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='53'
    height='52'
    viewBox='0 0 53 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M47.1565 28.9323V36.3609C47.1565 39.5787 39.3961 43.7895 29.8232 43.7895C20.2503 43.7895 12.4899 39.5787 12.4899 36.3609C12.4899 35.3023 12.4899 33.2388 12.4899 30.1704'
      stroke='#989898'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <SvgPath
      d='M13.2174 30.8111C15.3588 33.6544 21.9831 36.3204 29.8231 36.3204C39.396 36.3204 47.1564 32.3455 47.1564 28.9266C47.1564 27.0082 44.7129 24.9055 40.8768 23.4294'
      stroke='#989898'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <SvgPath
      d='M39.7279 16.5513V23.9799C39.7279 27.1977 31.9675 31.4085 22.3946 31.4085C12.8217 31.4085 5.06128 27.1977 5.06128 23.9799C5.06128 22.392 5.06128 18.1393 5.06128 16.5513'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <SvgPath
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.3949 23.9394C31.9678 23.9394 39.7282 19.9645 39.7282 16.5456C39.7282 13.1267 31.9678 9.12281 22.3949 9.12281C12.8219 9.12281 5.06152 13.1267 5.06152 16.5456C5.06152 19.9645 12.8219 23.9394 22.3949 23.9394Z'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
