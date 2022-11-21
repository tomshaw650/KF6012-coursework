//adapted from Riku Rouvila
import { useEffect, useState } from "react";

export default function useApiRequest(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setData(json.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url, data]);

  return { loading, data };
}
