import React, { useState } from 'react'

const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return images ? (
        <div className="relative mt-4">
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="block mx-auto" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button onClick={goToPrevImage} className="bg-sky-700 bg-opacity-60 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full">
                    &lt;
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button onClick={goToNextImage} className="bg-sky-700 hover:bg-sky-500 bg-opacity-60 text-white font-bold py-2 px-4 rounded-full">
                    &gt;
                </button>
            </div>
        </div>
    ) : <></>
}

export default ImageGallery