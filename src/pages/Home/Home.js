import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const serviceOption = useLoaderData();

  return (
    <div className="grid grid-cols-4 h-screen p-16 mx-auto items-center home-container ">
      {serviceOption.map((option) => (
        <Service key={option.id} option={option}></Service>
      ))}
    </div>
  );
};

export default Home;
