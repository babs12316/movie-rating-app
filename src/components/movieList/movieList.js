import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMovies from "../../actions/fetchMovies/fetchMovies";
import MovieItem from "../movieItem/movieItem";
import "./movieList.css";

export class MovieList extends Component {
  render() {
    return (
      <div className="app-container">
       <MovieItem
          fetchMovies={this.props.fetchMovies}
          moviesInfo={this.props.moviesInfo}
        ></MovieItem>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesInfo: state.movies.moviesInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
