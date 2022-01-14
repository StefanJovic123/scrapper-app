import { toast, ToastOptions } from 'react-toastify';

export const success = (text: string, options?: ToastOptions) => toast.success(text, options);
export const info = (text: string, options?: ToastOptions) => toast.info(text, options);
export const warning = (text: string, options?: ToastOptions) => toast.warning(text, options);
export const error = (text: string, options?: ToastOptions) => toast.error(text, options);
