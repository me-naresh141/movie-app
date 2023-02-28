import React, { Component } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "../Stylesheet/model.css";
class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleRightSlider = () => {
    if (this.props.movie.Images.length - 1 > this.state.index) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  handleLeftSlider = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div className="model-div">
        <div className="figure-div">
          {this.state.index > 0 && (
            <MdOutlineKeyboardArrowLeft
              className="previous-btn"
              onClick={this.handleLeftSlider}
            />
          )}
          <figure>
            <img
              className="modelImage"
              src={this.props.movie.Images[this.state.index]}
              alt="img"
            ></img>
          </figure>
          {this.state.index === this.props.movie.Images.length - 1 ? (
            " "
          ) : (
            <MdOutlineKeyboardArrowRight
              className="next-btn"
              onClick={this.handleRightSlider}
            />
          )}
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{this.props.movie.Title}</h1>
          <time className="movie-info-time">
            Released:{this.props.movie.Released}
          </time>
          <ul>
            <li>
              <strong>Actors:</strong> {this.props.movie.Actors}
            </li>
            <li>
              <strong>Awards</strong>:{this.props.movie.Awards}
            </li>
            <li>
              <strong>Country:</strong>
              {this.props.movie.Country}
            </li>
            <li>
              <strong>Director:</strong>
              {this.props.movie.Director}
            </li>
            <li>
              <strong>Runtime:</strong>
              {this.props.movie.Runtime}
            </li>
            <li>
              <strong>Genre:</strong>
              {this.props.movie.Genre}
            </li>
            <li>
              <strong>Writer:</strong>
              {this.props.movie.Writer}
            </li>
            <li>
              <strong>Plot:</strong>
              {this.props.movie.Plot}
            </li>
            <li>
              <strong>Language:</strong>
              {this.props.movie.Language}
            </li>
            <li>
              <strong>Country:</strong>
              {this.props.movie.Country}
            </li>
            <li>
              <strong>Awards:</strong>
              {this.props.movie.Awards}
            </li>
            <li>
              <strong>Metascore:</strong>
              {this.props.movie.Metascore}
            </li>
            <li>
              <strong>imdbRating:</strong>
              {this.props.movie.imdbRating}
            </li>
            <li>
              <strong>imdbVotes:</strong>
              {this.props.movie.imdbVotes}
            </li>
            <li>
              <strong>imdbID:</strong>
              {this.props.movie.imdbID}
            </li>
            <li>
              <strong>Type:</strong>
              {this.props.movie.Type}
            </li>
            <li>
              <strong>Response:</strong>
              {this.props.movie.Response}
            </li>
            <li>
              <strong>imdbVotes:</strong>
              {this.props.movie.imdbVotes}
            </li>
            <li>
              <strong>imdbVotes:</strong>
              {this.props.movie.imdbVotes}
            </li>
          </ul>
        </div>
        <span className="close-btn" onClick={this.props.handleCross}>
          ❌
        </span>
      </div>
    );
  }
}

export default Model;
