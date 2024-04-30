import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={onClose}>
            <div style={{ position: 'relative', padding: 20, background: 'transparent', borderRadius: '10px', maxWidth: '90vw', maxHeight: '90vh', overflow: 'auto' }}>
                <button className="hover:text-red-500 text-red-700 text-xl" onClick={onClose} style={{ position: 'absolute', top: 20, right: 30 }}>Close X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
