import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Map from "../../images/Map.png";
import People from "../../images/peopleicon.png";
import { BsArrow90DegDown } from "react-icons/bs";

const Destination = () => {
  const data = useLoaderData();
  const [hide, setHide] = useState(false);
  const [travelInfo, setTravelInfo] = useState({});

  console.log(travelInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pickFrom = form.from.value;
    const pickto = form.to.value;
    const info = {
      from: pickFrom,
      to: pickto,
    };
    setTravelInfo(info);
  };

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      <div className=" bg-slate-200 rounded-lg  h-96">
        <div hidden={hide}>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick From</span>
              </label>
              <input
                type="text"
                name="from"
                placeholder="pick from"
                className="input input-bordered"
                defaultValue="Dhanmondi 27"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick To</span>
              </label>
              <input
                type="text"
                name="to"
                placeholder="pick to"
                className="input input-bordered"
                defaultValue="Mirpur 10"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                onClick={() => setHide(true)}
                type="submit"
                value="Search"
                className="btn btn-warning text-white"
              />
            </div>
          </form>
        </div>
        <div hidden={!hide}>
          <div className=" bg-orange-400 rounded-lg m-2 p-2 border-l-8 font-bold border-black text-white">
            <h2>{travelInfo.from}</h2>
            <BsArrow90DegDown className="text-4xl ml-6 m-4" />
            <h2>{travelInfo.to}</h2>
          </div>
          <div className="bg-white rounded-lg m-2 mt-4 p-2 border-l-2 font-bold border-black flex justify-between items-center">
            <div className="flex items-center">
              <img className=" w-10 me-6" src={data.img} alt="" />
              <div className="flex items-center">
                <p className="uppercase text-xs">{data.name}</p>
                <img className="w-5 ml-4 mr-2" src={People} alt="" />
                <p>1</p>
              </div>
            </div>
            <p>$10</p>
          </div>
          <div className="bg-white rounded-lg m-2 mt-4 p-2 border-l-2 font-bold border-black flex justify-between items-center">
            <div className="flex items-center">
              <img className=" w-10 me-6" src={data.img} alt="" />
              <div className="flex items-center">
                <p className="uppercase text-xs">{data.name}</p>
                <img className="w-5 ml-4 mr-2" src={People} alt="" />
                <p>2</p>
              </div>
            </div>
            <p>$30</p>
          </div>
          <div className="bg-white rounded-lg m-2 mt-4 p-2 border-l-2 font-bold border-black flex justify-between items-center">
            <div className="flex items-center">
              <img className=" w-10 me-6" src={data.img} alt="" />
              <div className="flex items-center">
                <p className="uppercase text-xs">{data.name}</p>
                <img className="w-5 ml-4 mr-2" src={People} alt="" />
                <p>3</p>
              </div>
            </div>
            <p>$40</p>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <img className="h-screen w-full" src={Map} alt="" />
      </div>
    </div>
  );
};

export default Destination;
