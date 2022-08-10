import React, { ComponentProps } from 'react'
import { styled } from '@stitches/react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$gray400',
  borderRadius: '99999px',
  width: '100%',
  height: 12,
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
  defaultValue: number
  progressValue: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  defaultValue = 0,
  progressValue = 0,
  css = {},
}) => {
  const [progress, setProgress] = React.useState(defaultValue)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressValue), 400)
    return () => clearTimeout(timer)
  }, [progressValue])

  return (
    <Progress value={progressValue} css={{ ...css }}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress>
  )
}
