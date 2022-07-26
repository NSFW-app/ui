import { theme } from 'core/stitches'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Profile: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 10C20 15.5229 15.5229 20 10 20C4.47715 20 0 15.5229 0 10C0 4.47715 4.47715 0 10 0C15.5229 0 20 4.47715 20 10ZM12.5 6.25C12.5 7.63071 11.3808 8.75 10 8.75C8.61929 8.75 7.5 7.63071 7.5 6.25C7.5 4.86929 8.61929 3.75 10 3.75C11.3808 3.75 12.5 4.86929 12.5 6.25ZM9.99991 11.25C7.47799 11.25 5.30493 12.7438 4.31718 14.8946C5.69254 16.49 7.72831 17.5 9.99998 17.5C12.2716 17.5 14.3074 16.4901 15.6828 14.8948C14.695 12.7438 12.5219 11.25 9.99991 11.25Z'
      className='primary fill'
      css={{
        fill: theme.colors.gray900,
        transition: theme.transitions.iconColor,
      }}
    />
  </Svg>
)
