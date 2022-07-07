import { isServer } from 'lib/nextjs'
import ReactConfetti, { Props } from 'react-confetti'
import { useWindowSize } from 'react-use'

export interface ConfettiProps extends Props {
  zIndex?: number
}

export const Confetti: React.FC<ConfettiProps> = ({
  zIndex = 1,
  children,
  ...args
}) => {
  const { height, width } = useWindowSize()

  if (isServer()) return <>{children}</>

  return (
    <ReactConfetti
      style={{
        position: 'absolute',
        zIndex,
      }}
      height={height}
      width={width}
      colors={['#3CA6C8', '#A353E7', '#31D28F']}
      numberOfPieces={200}
      recycle={false}
      {...args}
    >
      {children}
    </ReactConfetti>
  )
}

export default Confetti
