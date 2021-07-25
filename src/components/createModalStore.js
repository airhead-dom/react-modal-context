import { useState } from 'react';

const useModalStore = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return {isOpen: isModalOpen, toggleModal: setIsModalOpen}
}

export default useModalStore;