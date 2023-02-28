import React, { Component } from "react";
import Model from "./Model";
import "../Stylesheet/hero.css";
import data from "../data/data.json";

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      movie: "",
      showModel: false,
    };
  }
  handleModel = (obj) => {
    this.setState({
      movie: obj,
      showModel: true,
    });
  };
  handleCross = () => {
    this.setState({
      movie: "",
      showModel: false,
    });
  };
  render() {
    return (
      <main>
        <div className="parent-div">
          {data.map((obj, index) => {
            return (
              // movie card
              <div className="movie-card" key={index} id={index}>
                <div>
                  <figure className="hero-figure">
                    <img className="img" src={obj.Images[0]} alt="img"></img>
                  </figure>
                  <div>
                    <h2 className="title">{obj.Title}</h2>
                    <time className="released-time">
                      Released:{obj.Released}
                    </time>
                    <button onClick={() => this.handleModel(obj)}>
                      more info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* model */}
          {this.state.showModel && (
            <Model
              movie={this.state.movie}
              showModel={this.state.showModel}
              handleCross={this.handleCross}
            />
          )}
        </div>
      </main>
    );
  }
}

export default Hero;
