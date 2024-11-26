import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  const brands = [
    { id: 1, name: "HYUNDAI", img: "Hyundai.png" },
    { id: 3, name: "HONDA", img: "honda.png" },
    // { id: 4, name: "BMW", img: "BMW.png" },
    // { id: 5, name: "AUDI", img: "Audi.png" },
    // { id: 6, name: "TOYOTO", img: "toyoto.png" },
  ];

  function windowCall() {
    window.open("./BrandPage", "_blank");
  }

  return (
    <div>
      {brands.map((item) => (
        <div
          key={item.id}
          className="border-gray border-2 w-32 h-32 rounded m-5 shadow-[0px_0px_47px_1px_rgba(0,_0,_0,_0.1)] flex justify-center items-center flex-col hover:scale-125 transition-all duration-600"
        >
          <img src={item.img} alt="Brand Images" className="w-20 h-20" />
          <span className="text-red-500 hover:text-blue-400">{item.name}</span>
        </div>
      ))}

      <button onClick={windowCall}>To Go Brand Page</button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
