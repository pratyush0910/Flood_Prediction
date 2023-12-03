import React, { useState ,useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer  from './components/footer';
import axios from 'axios';

const url ="https://flood-predictor.onrender.com/predict"

const getProducts = async url => {

  
    const response = await axios.post(url);
    const Products =await response.data;
    console.log(Products)


}
 




const FloodPredictionForm = () => {
  const [rainFallMarToMay, setLocation] = useState('');
  const [avgRainFallJun , setRainfall] = useState('');
  const [ avgIncreaseRainFallMayToJun, setRiverLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('rainFallMarToMay:', rainFallMarToMay);
    console.log('Rainfall:', avgRainFallJun );
    console.log('River Level:',  avgIncreaseRainFallMayToJun);
    setLocation('');
    setRainfall('');
    setRiverLevel('');
  };

  useEffect(() =>{
    getProducts(url);
  
  },[]);
  return (
<div className='bg- h-[100vh]' >
<Navbar />

    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Flood Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rainFallMarToMay" className="block text-gray-700">Rainfall from March to May:</label>
          <input
            id="rainFallMarToMay"
            type="number"
            value={rainFallMarToMay}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Rainfall from March to May:"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avgRainFallJun " className="block text-gray-700">Average Rainfall during last 10 days of June (mm):</label>
          <input
            id="avgRainFallJun "
            type="number"
            value={avgRainFallJun }
            onChange={(e) => setRainfall(e.target.value)}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Average Rainfall during last 10 days of June (mm)"
          />
        </div>
        <div className="mb-4">
          <label htmlFor=" avgIncreaseRainFallMayToJun" className="block text-gray-700">Average Increase rain from May to June:</label>
          <input
            id=" avgIncreaseRainFallMayToJun"
            type="number"
            value={ avgIncreaseRainFallMayToJun}
            onChange={(e) => setRiverLevel(e.target.value)}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Average Increase rain from May to June "
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Predict
        </button>
      </form>
    </div>
  <Footer></Footer>
    </div>
  );
};

export default FloodPredictionForm;
