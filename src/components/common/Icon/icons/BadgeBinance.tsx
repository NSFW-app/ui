import { Svg, SvgPath } from 'primitives/Svg'
import { SvgIconProps } from '.'

export const BadgeBinance: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      css={css}
    >
      <g clipPath='url(#clip0_44_483)'>
        <SvgPath
          d='M7.33898 10.085L12 5.42398L16.6631 10.087L19.3751 7.37498L12 0L4.62718 7.37277L7.33907 10.0848L7.33898 10.085ZM0 12L2.71209 9.28748L5.42398 11.9994L2.71189 14.7115L0 12ZM7.33898 13.9152L12 18.5759L16.663 13.913L19.3765 16.6236L19.3751 16.625L12 23.9999L4.62718 16.6271L4.62334 16.6233L7.33927 13.915L7.33898 13.9152ZM18.5759 12.0011L21.288 9.28902L23.9999 12.0009L21.2879 14.713L18.5759 12.0011Z'
          fill='#F3BA2F'
        />
        <SvgPath
          d='M14.7505 11.9985H14.7517L11.9999 9.24658L9.966 11.2799L9.73234 11.5137L9.25042 11.9957L9.24658 11.9995L9.25042 12.0034L11.9999 14.7533L14.7519 12.0014L14.7532 11.9999L14.7507 11.9985'
          fill='#F3BA2F'
        />
      </g>
      <defs>
        <clipPath id='clip0_44_483'>
          <rect width='24' height='23.9999' fill='white' />
        </clipPath>
      </defs>
    </Svg>
  )
}
