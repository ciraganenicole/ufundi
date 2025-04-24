import { useState } from 'react';
import { MdClose } from 'react-icons/md';

type Image = {
  src: string;
  description: string;
};

const images: Image[] = [
  { src: '/img1.jpg', description: 'Description for Image 1' },
  { src: '/img2.jpg', description: 'Description for Image 2' },
  { src: '/img3.jpg', description: 'Description for Image 3' },
  { src: '/img4.jpg', description: 'Description for Image 4' },
  { src: '/img5.jpg', description: 'Description for Image 5' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.length > 0 && (
          <div className="col-span-2 row-span-2">
            <img
              src={images[0]?.src}
              alt="Big Image"
              className="size-full cursor-pointer object-cover transition-transform duration-300 hover:opacity-70 "
              onClick={() => handleImageClick(images[0]!)}
            />
          </div>
        )}
        {images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Thumbnail ${idx + 1}`}
            className="size-full cursor-pointer object-cover transition-transform duration-300 hover:opacity-70 "
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-lg  bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-16 -top-4 rounded-full bg-gray-700 p-2 text-white transition-transform duration-300 hover:scale-110 hover:bg-gray-800"
              onClick={handleCloseModal}
            >
              <MdClose size={24} />
            </button>

            <img
              src={selectedImage.src}
              alt="Selected"
              className="h-auto w-full "
            />
            <p className="mt-4 text-center text-gray-700">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
