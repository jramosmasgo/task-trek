import { useState, ReactNode } from 'react';

type UseModalReturn = {
    isOpen: boolean;
    modalContent: ReactNode;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
};

export const useModal = (): UseModalReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return {
        isOpen,
        modalContent,
        openModal,
        closeModal,
    };
};