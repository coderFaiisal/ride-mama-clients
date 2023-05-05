import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ option }) => {
  const { id, name, img } = option;
  const navigate = useNavigate();

  const handleSearchPath = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <div
      onClick={() => handleSearchPath(id)}
      className="p-4 w-56 h-56 rounded-lg mx-auto bg-white text-center hover:scale-105"
    >
      <img src={img} alt="" />
      <h2 className=" text-xl mt-4 uppercase font-bold ">{name}</h2>
    </div>
  );
};

export default Service;
