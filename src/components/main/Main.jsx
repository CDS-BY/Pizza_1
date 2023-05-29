import Autorization from "../../pages/Autorization";
import NotFound from "../../pages/NotFound"

import { Routes, Route } from "react-router-dom";

import "./main.css";
import Home from "../../pages/Home";

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/autorization" element={<Autorization />} />
		  <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
