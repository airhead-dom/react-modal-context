import React from 'react';
import useModal from "./useModal";

const Modal = ({ children }) => {
    const { isOpen, toggleModal } = useModal();

    return (
        <div className={`modal ${isOpen && 'open'}`}>
            <div className="inner">
                <div className="modal-body">
                    {children}

                    <button onClick={() => toggleModal(false)}>Close Modal</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
