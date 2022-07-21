import { ToastOptions } from 'react-toastify'

const snackBar: ToastOptions = {
  closeButton: false,
  hideProgressBar: true,
  className: 'styled-toast',
  position: 'bottom-center',
}

export const darkToast: ToastOptions = {
  hideProgressBar: true,
  className: 'styled-toast dark',
  position: 'bottom-right',
}

export const errorToast: ToastOptions = {
  hideProgressBar: true,
  className: 'styled-toast error',
  position: 'bottom-right',
}

export const successToast: ToastOptions = {
  hideProgressBar: true,
  className: 'styled-toast success',
  position: 'bottom-right',
}
export default snackBar
