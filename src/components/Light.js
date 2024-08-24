import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { File as Upload } from './File';  // Correctly import named export
import './Light.css'; 
const Light = () => {
  const [imageSrc, setImageSrc] = useState('light_2.jpg');
  const navigate = useNavigate();

  const handleImageToggle = () => {
    setImageSrc(prevImageSrc =>
      prevImageSrc === 'light_2.jpg' ? 'light_1.jpg' : 'light_2.jpg'
    );
    alert("Congrats you wished Dude a Happy Birthday");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6" >
      <div className="text-center mb-8">
        <img src={imageSrc} alt="Toggle Image" className="candle"/>
        <button 
          onClick={handleImageToggle} 
          className="mt-1 px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition" onclic>
          Light the candle
        </button>
      </div>

      <div className="flex justify-around w-fit mb-8" id = "load">
        <div>
          <h3 className="text-lg font-semibold mb-2" id ="up1">Upload a Memory</h3>
          <Upload />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2" id = "up2">Upload a Gif</h3>
          <Upload />
        </div>
      </div>

      <div className="flex space-x-8">
        <button 
          onClick={() => navigate('/memories')} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition" id = "but1">
          Go to Memories
        </button>
        <button 
          onClick={() => navigate('/memes')} 
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition" id = "but2">
          Go to Memes
        </button>
      </div>
    </div>
  );
};

export default Light;
