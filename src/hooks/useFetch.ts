import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await axios(url);
        const responseData = res.data;
        setData(responseData);
      } catch (err) {
        setError({ status: true, msg: "There is something error.." });
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, loading, error };
};
