import { theme } from 'lib/theme'
import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const Trash: React.FC<SvgIconProps> = ({ css }) => (
  <Svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css}
  >
    <SvgPath
      d='M2.6665 4.66667H13.3332M12.6665 4.66667L12.0883 12.7617C12.0384 13.4594 11.4578 14 10.7584 14H5.24133C4.54181 14 3.96122 13.4594 3.91138 12.7617L3.33317 4.66667H12.6665ZM6.6665 7.33333V11.3333V7.33333ZM9.33317 7.33333V11.3333V7.33333ZM9.99984 4.66667V2.66667C9.99984 2.29848 9.70137 2 9.33317 2H6.6665C6.29832 2 5.99984 2.29848 5.99984 2.66667V4.66667H9.99984Z'
      strokeLinecap='round'
      strokeLinejoin='round'
      css={{
        stroke: theme.colors.red100,
      }}
    />
  </Svg>
)
