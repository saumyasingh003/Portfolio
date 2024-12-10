
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "./Components/ui/Spinner";

const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <div className=" ">
      
      <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
