import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

interface ModalWindowProps {
    title: string;
    onClick: () => void;
    onClose: () => void;
    open: boolean;
    buttonTitle?: string;
    children: React.ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({ title, onClick, onClose, open, buttonTitle, children }) => {
    return (
        <Modal isOpen={open}
            onRequestClose={() => onClose()}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 0,
                    border: "none"
                },
                overlay: {
                    backgroundColor: '#1a1a1a91',
                },
            }}
        >
            <div className="dark-theme">
                <div className="modal">
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <AiOutlineClose onClick={() => onClose()} />
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                    <div className='modal-footer'>
                        <button className='btn-primary_outline' onClick={() => onClose()}>
                            Close
                        </button>
                        <button className='btn-primary' onClick={() => onClick()} >
                            {buttonTitle ?? 'Accept'}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalWindow;