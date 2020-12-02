import Axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setResponse({});
    setError(null);

    Axios.get(endpoint)
      .then((response) => {
        setLoading(false);
        setError(null);
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return [response, loading, error];
};
