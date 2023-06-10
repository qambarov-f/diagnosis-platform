import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

import styles from "./Card.module.css";
import { favMovie } from "../../../../store/slices/homeSlice";

export const CardItem = (props) => {

  const [showFav, setShowFav] = useState(false);
 
  const dispatch = useDispatch()

  const handleFav= () => {
    setShowFav((prev) => !prev);
    console.log("omdbID", imdbID);
    dispatch(favMovie(props));
  }

  const { Poster, Title, Type, Year, imdbID } = props;

  return (
    <Card
      style={{
        width: "20rem",
        height: "530px",
        margin: "10px",
        position: "relative",
      }}
    >
      <div className={styles.fav} onClick={handleFav}>
        {showFav ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>

      <Card.Img
        variant="top"
        src={Poster}
        height="350"
        style={{ objectFit: "fill" }}
      />

      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Type}</Card.Text>
        <Card.Text>{Year}</Card.Text>
        <Link to={`/movie/slug=${Title}`} className="btn btn-info w-100">
          Watch More
        </Link>
      </Card.Body>
    </Card>
  );
};
