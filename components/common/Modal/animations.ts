import { UseTransitionProps } from '@react-spring/web'

export type ModalAnimation = UseTransitionProps | DefaultAnimationNames

export type DefaultAnimationNames =
  | 'fadeIn'
  | 'fadeTopToBottom'
  | 'fadeBottomToTop'
  | 'fadeRightToLeft'
  | 'fadeLeftToRight'

export type DefaultModalAnimations = Record<
  DefaultAnimationNames,
  UseTransitionProps
>

export const isTransitionProps = (
  animation: ModalAnimation
): animation is UseTransitionProps => {
  return typeof animation === 'object' && 'from' in animation
}

export const DEFAULT_MODAL_ANIMATIONS: DefaultModalAnimations = {
  fadeIn: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  },
  fadeTopToBottom: {
    from: { top: '-100%', opacity: 0 },
    enter: { top: '0%', opacity: 1 },
    leave: { top: '-100%', opacity: 0 },
  },
  fadeBottomToTop: {
    from: { bottom: '-100%', opacity: 0 },
    enter: { bottom: '0%', opacity: 1 },
    leave: { bottom: '-100%', opacity: 0 },
  },
  fadeRightToLeft: {
    from: { left: '100%', opacity: 0 },
    enter: { left: '0%', opacity: 1 },
    leave: { left: '100%', opacity: 0 },
  },
  fadeLeftToRight: {
    from: { left: '-100%', opacity: 0 },
    enter: { left: '0%', opacity: 1 },
    leave: { left: '-100%', opacity: 0 },
  },
}
