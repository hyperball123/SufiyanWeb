import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from "axios";
export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    console.log("CDM is called");
    // let res = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=86dc585ecbd56b68516c9857b52206cf&language=en-US&page=1"
    // );
    // let data = await res.json();
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=86dc585ecbd56b68516c9857b52206cf&language=en-US&page=1"
    );
    console.log(data.data);
    this.setState({
      movies: [...data.data.results],
    });
  }
  render() {
    // let movie = movies.results[0];
    return (
      <>
        {this.state.movies.length === 0 ? (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${this.state.movies[0].backdrop_path}`}
              className="card-img-top banner-img"
              alt="..."
            />
          
              <h5 className="card-title banner-title">
                {this.state.movies[0].original_title}
              </h5>
              <p className="card-text banner-text">
                {this.state.movies[0].overview}
              </p>
            </div>
          
        )}
      </>
    );
  }
}
