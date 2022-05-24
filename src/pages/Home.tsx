import { FC } from "react";
import "../style/home.css";
import Footer from "../components/Footer";

const Home: FC = () => {
  return (
    <div>
      <article className="home-title">
        <h1 className="title">Andrea Meyer</h1>
        <p className="sub-title">Curiosity-driven digital engineering person</p>
      </article>
      <Footer />
    </div>
  );
};

export default Home;
