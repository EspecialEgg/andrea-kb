import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import "../pages/Home";
import Home from "../pages/Home";
import "../pages/Projects";
import Projects from "../pages/Projects";
import NasaApi from "../pages/NasaApi";
import PostcardsSent from "../pages/PostcardsSent";

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/nasaapi" element={<NasaApi />}></Route>
      <Route path="postcardssent" element={<PostcardsSent />}></Route>
    </Routes>
  );
};

export default Routing;
