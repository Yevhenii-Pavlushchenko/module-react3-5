import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";
import OrderForm from "../OrderForm/OrderForm";

interface modalProps {
    onClose: () => void;
    сhildren?: React.ReactNode;
}

export default function Modal({ onClose, сhildren  }: modalProps) {
    
    //!Close modal on backdrop click
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }

    //!Close modal on Escape key press
    useEffect(() => { 
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; //! Блокируем прокрутку при открытии модального окна

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "visible"; //! Возвращаем прокрутку при закрытии модального окна
        }
    }, [onClose]);
    
 
    return createPortal(
        <div className={css.backdrop}onClick={handleBackdropClick} role="dialog"
      aria-modal="true">
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
                </button>
                {/* Содержимое модального окна */}
                {сhildren||<OrderForm/>}
        <h2 className={css.modalTitle}>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </div>
    </div>,
    document.body,
  );
}
