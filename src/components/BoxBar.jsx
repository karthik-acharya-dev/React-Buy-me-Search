import React, { useEffect, useState } from "react";
import axios from "axios";
export default function BoxBar({ searchInput }) {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((param) =>
        data[param].toString().toLowerCase().includes(searchInput)
      )
    );
  }

  console.log("Obj Conver", search_parameters);
  const fetchData = () => {
    return axios.get(url).then((res) => setData(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(data);
  return (
    <div className="grid grid-cols-5 p-5">
      {search(data).map((obj) => {
        return (
          <div className="w-72 h-60 m-5 border bg-white shadow-md rounded-md p-10 hover:rotate-6 duration-500">
            <div>
              <div className="font-bold mb-7">{obj.username}</div>
              <div>
                {obj.name}
                <div>{obj.email}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
