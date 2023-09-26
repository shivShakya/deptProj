import React, { useState, useRef } from 'react';
import { useImageContext } from './MyContext';


function Photo() {

  const { setImageBlobData } = useImageContext();
  const imageRef = useRef();
  const [selectedImage, setSelectedImage] = useState('https://forum.bubble.io/uploads/default/original/3X/1/2/12e944afd917d123319c9074a7e72581785a3b38.png');


  const handleImageClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log({'image-url-blob' : imageUrl});
      setSelectedImage(imageUrl);
      setImageBlobData(imageUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div onClick={handleImageClick} onDragOver={handleDragOver} onDrop={handleDrop} style={{ cursor: 'pointer' }} className='photo-div'>
      <img
        src={selectedImage}
        alt='Selected'
        ref={imageRef}
        className='photos'
        width={'300px'}
        height={'300px'}
      />
      <input
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
        ref={imageRef}
      />
    </div>
  );
}

export default Photo;
