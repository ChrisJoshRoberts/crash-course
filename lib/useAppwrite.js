import { useState, useEffect } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fn();
        setData(response);
      } catch (error) {
        console.error(error);
        Alert.alert('Error',error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);

  const refetch = () => fetchData();
  return { data, isLoading, refetch  };
}
export default useAppwrite;
