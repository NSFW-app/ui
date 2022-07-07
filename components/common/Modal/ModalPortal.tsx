import ReactDOM from 'react-dom'

export const ModalPortal: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      children,
      document.getElementById('modal-container')!
    )
  }
  return null
}
