import Axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint, id) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setResponse({});
    setError(null);

    Axios.get(`${endpoint}/${id}`)
      .then((response) => {
        setLoading(false);
        setError(null);
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  return [response, loading, error];
};
