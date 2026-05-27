import type React from "react";
import type { ToastContainerProps } from "../../modal/toast";
import { createPortal } from "react-dom";
import './Toast.css';


export const Toast : React.FC<ToastContainerProps> = ({ toasts , onClose }) => {

    return createPortal(
        <>
        <div className="toast_container">
            {
                toasts.map((toast) => {
                    return (
                        <div key={toast.id}  className={ `toast_card toast_card_${toast.type}` }  role="alert">
                                <span className="toast_message"> { toast.message }</span>
                                <button onClick={() => onClose(toast.id)} className="toast_btn">X</button>
                        </div>
                    )
                })
            }
        </div>
        </>,
        document.body
    )
}