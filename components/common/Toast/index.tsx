import { ToastContainer, ToastContainerProps } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface ToastProps extends ToastContainerProps {}

export const Toast: React.FC<ToastProps> = ({ ...args }) => {
  return <ToastContainer {...args} />
}
