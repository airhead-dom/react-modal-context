import React from 'react';
import useModal from "./useModal";

const ClickMe = () => {
    const { toggleModal } = useModal();

    return (
        <button onClick={() => toggleModal(true)}>Open Modal</button>
    )
}

export default ClickMe;