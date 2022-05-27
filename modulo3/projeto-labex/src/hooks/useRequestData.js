import axios from "axios";
import { useEffect, useState } from "react";
import { base_URL, user } from "../constants/urls";

export const useRequestData = (path, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    const header = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${base_URL}/${user}/${path}`, header)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Erro de requisição");
      });
  };

  useEffect(() => {
    getData();
  }, [path]);

  return [data, getData];
};
