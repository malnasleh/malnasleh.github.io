import React, { useState } from 'react';
import Modal from './Modal';

const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const goToPrevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const openModal = index => {
        console.log("Opening modal for index:", index); // Check if openModal is triggered
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return images ? (
        <div className="relative mt-4">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="block mx-auto"
                />
            </Modal>
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="block mx-auto cursor-pointer"
                onClick={() => openModal(currentImageIndex)} // Ensure openModal is correctly invoked
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button onClick={goToPrevImage} className="bg-sky-700 bg-opacity-60 hover:bg-sky-500 text-white font-bold py-2 px-4 ml-1 rounded-full">
                    &lt;
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button onClick={goToNextImage} className="bg-sky-700 hover:bg-sky-500 bg-opacity-60 text-white font-bold py-2 px-4 mr-1 rounded-full">
                    &gt;
                </button>
            </div>
        </div>
    ) : <></>;
};

export default ImageGallery;
