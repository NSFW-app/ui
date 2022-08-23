import React, { ComponentProps } from 'react'
import { styled } from '@stitches/react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$gray400',
  borderRadius: '9999px',
  width: '100%',
  height: 8,
  transform: 'translateZ(0)',
})

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  background: 'linear-gradient(73.28deg, #2f1b52 6.51%, #7230FF 88.45%)',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

export const Progress = StyledProgress
export const ProgressIndicator = StyledIndicator

export interface ProgressBarProps
  extends ComponentProps<typeof StyledProgress> {
  value: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  css = {},
}) => {
  return (
    <Progress value={value} css={css}>
      <ProgressIndicator css={{ transform: `translateX(-${100 - value}%)` }} />
    </Progress>
  )
}
