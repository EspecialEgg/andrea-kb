import { FC, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "../style/nasaapi.css";

const NASAapi: FC = () => {
  const apiUrl =
    "https://api.nasa.gov/planetary/apod?api_key=jlfaPiLGEiJIpZs1CqNF9Q3PcPudmW0NDQFN6u6j";

  type Information = {
    date: number;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  };

  const [data, setData] = useState<Information>();
  useEffect(() => {
    axios.get(apiUrl).then((response) => setData(response.data));
  }, []);

  return (
    <Container>
      <div className="nasa-api">
        <h2>{data?.title}</h2>
        <p>{data?.date}</p>
        <p>{data?.explanation}</p>
        <img className="nasa-image" src={data?.hdurl}></img>
      </div>
    </Container>
  );
};

export default NASAapi;
