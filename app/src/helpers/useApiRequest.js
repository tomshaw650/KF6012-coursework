import { useEffect, useState } from "react";

export default function useApiRequest(url, param) {
  const [paper, setPaper] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(url + param)
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
  }, [url, param, paper]);

  return { loading, paper };
}
