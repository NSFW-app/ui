import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Ticket: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <circle cx='26' cy='26' r='25.5' stroke='#989898' />
    <SvgPath
      d='M29.9661 17.6272V19.9774V17.6272ZM29.9661 24.678V27.0283V24.678ZM29.9661 31.7288V34.0791V31.7288ZM18.2147 17.6272C16.9166 17.6272 15.8644 18.6794 15.8644 19.9774V23.5029C17.1624 23.5029 18.2147 24.5551 18.2147 25.8531C18.2147 27.1512 17.1624 28.2034 15.8644 28.2034V31.7288C15.8644 33.0269 16.9166 34.0791 18.2147 34.0791H34.6666C35.9647 34.0791 37.0169 33.0269 37.0169 31.7288V28.2034C35.7189 28.2034 34.6666 27.1512 34.6666 25.8531C34.6666 24.5551 35.7189 23.5029 37.0169 23.5029V19.9774C37.0169 18.6794 35.9647 17.6272 34.6666 17.6272H18.2147Z'
      className='primary stroke'
      css={{
        stroke: theme.colors.voilet100,
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
