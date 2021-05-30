import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios'
import Tabletop from "tabletop";

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://sheet.best/api/sheets/ac64ce8a-6b8e-457b-91db-421051becea4")
    .then(res=>{
        console.log(res.data)
    })

    console.log("Next Data")

    Tabletop.init({
        key: "2PACX-1vSS5FAOql2jW1wbT5trXZsrQxyeIoUdoAV53AiZHQEbNTP0JCKLMqXo4JcOV2dJ1D5rYDUvR79v1X5A",
        simpleSheet: true
      })
        .then((data) => {console.log(data)})
        .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
    </>
  );
}