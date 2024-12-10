import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { Spinner } from "./Components/ui/Spinner";

const Home = lazy(() => import("./Components/Home"));

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {showSpinner ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
