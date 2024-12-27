import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return ( 
    <>
   
      <BrowserRouter>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center pl-[36rem]">
            <ThreeCircles
              visible={true}
              height="160"
              width="160"
              outerCircleColor="#4fa94d"
              innerCircleColor="#ff5733"
              middleCircleColor="#1e90ff"
              ariaLabel="three-circles-loading"
            />
            <p className="mt-6 text-4xl font-semibold text-gray-700">
              Saumya's Portfolio
            </p>
          </div>
        ) : (
          
           
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
