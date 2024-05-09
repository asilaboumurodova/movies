import axios from "axios";
import { useEffect, useState } from "react";

function useApi() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1)
  async function getApi(url) {
    let { data } = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_URL}/${url}`,
      params: { language: "ru-RU", page:page},
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    if (data.results) {
      setdata(data.results);
    } else {
      setdata(data);
    }
    setloading(false);
  }

  return { data, loading, getApi,page,setpage };
}

export default useApi;
