import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Email: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='16'
    height='12'
    viewBox='0 0 16 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M13.4457 0.75C14.3041 0.75 15 1.42157 15 2.25V9.75C15 10.5784 14.3041 11.25 13.4457 11.25H2.56558C1.70716 11.25 1.01127 10.5784 1.01127 9.75V2.25C1.01127 1.42157 1.70716 0.75 2.56558 0.75M13.4457 0.75H2.56558M13.4457 0.75C14.7244 1.02909 15 1.625 15 3L8.86781 6.9453C8.34572 7.28122 7.66556 7.28122 7.14346 6.9453L1.01127 3C0.934322 1.56384 1.22984 1.03135 2.56558 0.75M13.4457 0.75H8.00564H2.56558'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
    />
  </Svg>
)
