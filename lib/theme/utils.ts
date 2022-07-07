import { ScaleValue } from '@stitches/react/types/theme'

export const setColorOpacity = (color: ScaleValue, opacity: number) => {
  const colorHex = color.value.toString()
  if (colorHex.indexOf('#') === 0) {
    const opacityHex = Math.round(
      Math.min(Math.max(opacity || 1, 0), 1) * 255
    ).toString(16)
    return `${colorHex}${opacityHex}`
  }

  return colorHex
}
