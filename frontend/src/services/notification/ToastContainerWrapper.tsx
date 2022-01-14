import { ToastContainer, ToastContainerProps } from 'react-toastify';

const ToastContainerWrapper = ({
  position = 'bottom-right',
  autoClose = 5000,
  hideProgressBar = false,
  newestOnTop = false,
  closeOnClick = true,
  rtl = false,
  pauseOnFocusLoss = true,
  draggable = true,
  pauseOnHover = true
}: ToastContainerProps) => (
  <ToastContainer
    position={position}
    autoClose={autoClose}
    hideProgressBar={hideProgressBar}
    newestOnTop={newestOnTop}
    closeOnClick={closeOnClick}
    rtl={rtl}
    pauseOnFocusLoss={pauseOnFocusLoss}
    draggable={draggable}
    pauseOnHover={pauseOnHover}
  />
);

export default ToastContainerWrapper;
