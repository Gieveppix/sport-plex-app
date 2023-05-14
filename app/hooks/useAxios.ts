import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (method = "GET", url: string, requestData = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios({
          method,
          url,
          data: requestData,
        });

        setData(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData]);

  return { data, isLoading, error };
};

export default useAxios;
