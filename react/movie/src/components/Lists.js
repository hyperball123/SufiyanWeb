import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Lists extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };
  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  render() {
    let Allmovie = movies.results;
    return (
      <>
        {Allmovie.length === 0 ? (
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div>
              <h3 className="list-title">Trending</h3>
              <div className="movie-list">
                {Allmovie.map((movieObj) => {
                  return (
                    <div
                      className="card movie-card"
                      onMouseEnter={() => this.handleEnter(movieObj.id)}
                      onMouseLeave={this.handleLeave}
                      key={movieObj.id}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        className="card-img-top movie-img"
                        alt="..."
                      />
                      <h5 className="card-title movie-title">
                        {movieObj.original_title}
                      </h5>
                      <div className="button-wrapper">
                        {this.state.hover === movieObj.id && (
                          <a href="!#" className="btn btn-info movie-button">
                            Add to Favourites
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <nav aria-label="Page navigation example" className="pagination">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="!#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="!#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="!#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="!#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="!#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </>
    );
  }
}
