//adapted from Riku Rouvila
import { useEffect, useState } from "react";

export default function useApiRequest(url) {
  const [paper, setPaper] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setPaper(json.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url, paper]);

  return { loading, paper };
}
