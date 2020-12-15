import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "979352cb";

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };
  state = { movie: [] };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log(movie);
        this.setState({ movie });
      });
  }

  _goBack() {
    console.log("Home");
    window.history.back();
  }

  componentDidMount() {
    console.log(this.props);
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }

  render() {
    const { Title, Poster, Director, Genre, Actors, Plot } = this.state.movie;
    return (
      <div>
        <div id="detail" className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96 titulo">
                  <img src={Poster} alt={Title} />
                </figure>
              </div>
              <div id="detail-content" className="media-content">
                <p className="title is-3">
                  <a>{Title}</a>
                </p>
                <p className="subtitle is-6">
                  <strong>Director:</strong>
                  {Director}
                </p>
              </div>
            </div>

            <div className="content">
              {Plot}
              <p>
                <strong>Actors/actress: </strong>
                {Actors}
              </p>
              <p>
                <strong>Genre: </strong>
                {Genre}
              </p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="button is-info is-focused" onClick={this._goBack}>
            Back Home
          </button>
        </div>
      </div>
    );
  }
}
