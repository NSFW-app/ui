import { MouseEventHandler, ReactNode, useRef, useState } from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { imageLoader } from 'lib/nextjs/imageLoader'
import { CSSProp } from 'lib/theme'
import { useDisabledRightClick } from 'hooks/useDisabledRightClick'
import { Box } from 'primitives/Box'

const shimmer = (w: number | string, h: number | string) => {
  return `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
}
const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export interface ImageProps extends CSSProp {
  imageProps?: Partial<NextImageProps>
  onClick?: MouseEventHandler<HTMLDivElement>
  fallback?: ReactNode
  src?: string
  alt?: string
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  children,
  onClick,
  fallback,
  css = {},
  imageProps = {},
}) => {
  const {
    width = 544,
    height = 544,
    layout = 'fill',
    onError,
    ...nextImageProps
  } = imageProps
  const sizeProps = layout !== 'fill' ? { width, height } : {}

  const containerRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)

  useDisabledRightClick('img', containerRef)

  return (
    <Box transparent ref={containerRef} css={css} onClick={onClick}>
      {(hasError && fallback) || (!src && fallback) ? (
        <>{fallback}</>
      ) : src ? (
        <>
          <NextImage
            layout={layout}
            objectFit={
              (css?.objectFit as NextImageProps['objectFit']) || 'contain'
            }
            src={src}
            alt={alt}
            // default, when implementing consider passing specific sizes
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
            sizes='100vw'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(
                width, // max width images are rendered in (it will scale to parent)
                height
              )
            )}`}
            onError={(ev) => {
              setHasError(true)
              onError?.(ev)
            }}
            {...sizeProps}
            // Guard for static imports
            {...(typeof src === 'string' && { loader: imageLoader(src) })}
            {...nextImageProps}
          />
          {children}
        </>
      ) : null}
    </Box>
  )
}
