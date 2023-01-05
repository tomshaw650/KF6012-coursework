/**
 *
 * A custom hook to make API requests via fetch
 * the url is fetched and data is set to the response as JSON
 * once promise is resolved, the loading state is set to false and data is set to the response
 *
 * @params {string} url - the url to make the request to
 *
 * @return {loading, data} - loading is a boolean to manage loading state, data is an object to be used in the tablebody
 *
 * @author Tom Shaw, Riku Rouvila
 *
 */
import { useEffect, useState } from "react";

export default function useApiRequest(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [url]);

  return { loading, data };
}
