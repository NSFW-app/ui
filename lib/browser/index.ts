export const getTransitionEndEventName = () => {
  if (typeof document !== 'undefined') {
    var transitions: Record<string, keyof HTMLElementEventMap> = {
      transition: 'transitionend',
      OTransition: 'transitionend',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkittransitionend',
    }
    let bodyStyle = document.body.style
    for (let transition in transitions) {
      if (
        transitions.hasOwnProperty(transition) &&
        // transition event types dont exist
        // @ts-ignore
        bodyStyle[transition] != undefined
      ) {
        return transitions[transition]
      }
    }
  }
  // No transition supported for browser
  return 'no-transition'
}
