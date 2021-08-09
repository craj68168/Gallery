import { useEffect, useState } from "react";
import Axios from "axios";

const useFetchImages = (page, searchData) => {
  // custom hooks is just a function not component so we direct got argument and page is coming from the hooks called
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  let api = process.env.REACT_APP_API;
  let secret = process.env.REACT_APP_KEY;

  const fetchRandom = () => {
    setLoading(true);
    Axios.get(`${api}/photos?client_id=${secret}&page=${page}`)
      .then(res => {
        setImages([...images, ...res.data]);
        setLoading(false);
      })
      .catch(e => {
        setErrors("Unable to fetch data");
        setLoading(false);
      });
  };

  const fetchSearch = () => {
    setLoading(true);
    Axios.get(
      `${api}/search/photos?client_id=${secret}&page=${page}&query=${searchData}`
    )
      .then(res => {
        if (page > 1) {
          setImages([...images, ...res.data.results]);
          setLoading(false);
        } else {
          setImages([...res.data.results]);
          setLoading(false);
        }
      })
      .catch(e => {
        setErrors("Unable to fetch data");
        setLoading(false);
      });
  };

  useEffect(() => {
    // if (searchData === null) {
    //   // if no search than it will wont run
    //   return;
    // }
    if (searchData !== null) {
      fetchSearch();
    } else {
      fetchRandom();
    }
  }, [page, searchData]);

  return [images, setImages, loading, errors];
};

export default useFetchImages;
