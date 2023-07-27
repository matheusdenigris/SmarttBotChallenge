import { toast } from 'react-toastify'

export const customToast = {
  error(errMessage: string) {
    toast.error(errMessage, {
      toastId: errMessage,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  },

  sucess(sucessMessage: string) {
    toast.success(sucessMessage, {
      toastId: sucessMessage,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  },

  warning(warningMessage: string) {
    toast.warning(warningMessage, {
      toastId: warningMessage,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  },
}
