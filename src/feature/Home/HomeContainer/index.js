import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardItem as Card } from "../Components/Card";
import axios from "axios";

export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then(({ data: { Search } }) => {
        console.log(Search);
        this.setState({
          movies: Search,
        });
      });
  }

  render() {
    return (
      <Row container spacing={1}>
        {this.state.movies.map((movie) => (
          <Col key={movie.imdbID}>
            <Card {...movie} />
          </Col>
        ))}
      </Row>
    );
  }
}
