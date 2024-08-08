import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DefaultConfig = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}
export function NetworkError() {
    showError('you are offline, check your internet connection');
}
export function showError(message) {
    toast.error(message, DefaultConfig);
}
export function showMessage(message) {
    toast.success(message, DefaultConfig);
}