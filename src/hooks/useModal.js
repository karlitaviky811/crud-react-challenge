import { useState } from 'react';

export const useModal = () => {
    const [showModal, setShowModal] = useState( false );

    const handleOpenModal = ( user ) => {
        setShowModal( true );
    }

    const handleCloseModal = () => {
        setShowModal( false );
    }

    return [
        showModal,
        setShowModal,
        handleOpenModal,
        handleCloseModal,
    ];
    
}