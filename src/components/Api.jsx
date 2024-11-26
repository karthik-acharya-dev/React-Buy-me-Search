import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Api() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  // const [data, setData] = useState();
  // const fetchData = () => {
  //   return axios.get(url).then((res) => setData(res.data));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [data, setData] = useState();
  const fetchData = () => {
    return axios.get(url).then((res) => setData(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("Hello", data);
  return <div></div>;
}
