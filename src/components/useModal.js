import {useContext} from 'react';
import modalContext from "./modalContext";

const useModal = () => {
    const { isOpen, toggleModal } = useContext(modalContext);

    return { isOpen, toggleModal };
}

export default useModal;