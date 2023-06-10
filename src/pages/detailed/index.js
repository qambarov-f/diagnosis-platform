import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detailed = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(slug);
  }, []); 

  const getMovie = (title) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`)
      .then(({ data }) => {
        console.log(data);
        setMovie(data);
      });
  };

  if (!movie) {
    return <div className="display-1 text-white">Loading...</div>;
  }
  return <h1 className="text-white">Detailed</h1>;
};

export default Detailed;
