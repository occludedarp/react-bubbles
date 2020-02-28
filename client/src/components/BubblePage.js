import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getData();
    console.log(colorList)
  }, [colorList])
  
  const getData = () => {
    const token = window.localStorage.getItem('token');
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {setColorList(res.data)})
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
