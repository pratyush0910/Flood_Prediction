import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/footer";
// import axios from "axios";


const App = () => {
  // const [rainFallMarToMay, setRainFallMarToMay] = useState('');
  // const [avgRainFallJun , setAvgRainFallJun] = useState('');
  // const [ avgIncreaseRainFallMayToJun, setIncRainFall] = useState('');
  const [rainInfo, setRainInfo] = useState({
    rainFallMarToMay: "",
    avgRainFallJun: "",
    avgIncreaseRainFallMayToJun: "",
  });
  const [isFlood, setIsFlood] = useState("");
  const handlePrediction = async () => {
    console.log(typeof rainInfo.avgRainFallJun);
    const url = "https://flood-predictor.onrender.com/predict";
    const input = {
      rainFallMarToMay: parseFloat(rainInfo.rainFallMarToMay),
      avgRainFallJun: parseFloat(rainInfo.avgRainFallJun),
      avgIncreaseRainFallMayToJun: parseFloat(
        rainInfo.avgIncreaseRainFallMayToJun
      ),
    };
    console.log(typeof input.rainFallMarToMay);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify(input),
      
    });
    const data = await response.json();
    setIsFlood(data.data)
    // console.log(data);
  };

  return (
    <div className=""
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
    }}
    >
      {/* <Navbar /> */}
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-md shadow-md" >
        <h1 className="text-2xl font-semibold mb-4">Flood Prediction</h1>
        <div className="mb-4">
          <label htmlFor="rainFallMarToMay" className="block text-gray-700">
            Rainfall from March to May:
          </label>
          <input
            id="rainFallMarToMay"
            type="text"
            value={rainInfo.rainFallMarToMay}
            onChange={(e) =>
              setRainInfo({ ...rainInfo, rainFallMarToMay: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Rainfall from March to May:"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avgRainFallJun " className="block text-gray-700">
            Average Rainfall during last 10 days of June (mm):
          </label>
          <input
            id="avgRainFallJun "
            type="text"
            value={rainInfo.avgRainFallJun}
            onChange={(e) =>
              setRainInfo({ ...rainInfo, avgRainFallJun: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Average Rainfall during last 10 days of June (mm)"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor=" avgIncreaseRainFallMayToJun"
            className="block text-gray-700"
          >
            Average Increase rain from May to June:
          </label>
          <input
            id=" avgIncreaseRainFallMayToJun"
            type="text"
            value={rainInfo.avgIncreaseRainFallMayToJun}
            onChange={(e) =>
              setRainInfo({
                ...rainInfo,
                avgIncreaseRainFallMayToJun: e.target.value,
              })
            }
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Average Increase rain from May to June "
          />
        </div>
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          onClick={handlePrediction}
        >
          Predict
        </button>

      </div>
        {isFlood === "Flood" ? <h1 style={{fontSize:"2em"}}>There is a chance of flooding  </h1> : isFlood === "NO Flood" ? <h1 style={{fontSize:"2em"}} >No Flood</h1> : ""}
        {/* <Footer/> */}
    </div>
  );
};

export default App;