import React, { useState, useRef, useEffect } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { useDisabledRightClick } from 'hooks/useDisabledRightClick'

export interface VideoProps extends ReactPlayerProps {
  initDuration?: number
}

export const Video = ({
  style,
  height = '100%',
  width = '100%',
  initDuration,
  ...props
}: VideoProps) => {
  const containerRef = useRef<HTMLElement>()
  const [player, setPlayer] = useState<ReactPlayer | null | undefined>()
  const [ready, setReady] = useState(false)
  const [seconds] = useState(initDuration)

  useDisabledRightClick('video', containerRef)

  useEffect(() => {
    if (ready && player && seconds) {
      player.seekTo(seconds, 'seconds')
    }
  }, [ready, player, seconds])

  return (
    <ReactPlayer
      ref={(ref: ReactPlayer & { wrapper: HTMLDivElement }) => {
        // ref.wrapper is a ReactPlayer instance property that is the div wrapper it creates.
        // We use this too scope the useDisabledRightClick document query above.
        containerRef.current = ref?.wrapper
        setPlayer(ref)
      }}
      height={height}
      width={width}
      onReady={() => setReady(true)}
      config={{
        file: {
          attributes: {
            controlsList: 'nodownload noplaybackrate noremoteplayback',
          },
        },
      }}
      style={{
        position: 'absolute',
        ...style,
      }}
      {...props}
    />
  )
}
