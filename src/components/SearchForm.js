import React, { Component } from 'react';

const API_KEY = '979352cb';


export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }
//Con esto guardamos en el state de nuestro componente el texto que vayamos
//introduciendo en el input:

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }
  _handelSubmit = (e) => {
    e.preventDefault()

  const { inputMovie } = this.state;

  //Search=[], totalResults='0'sirve para cuando no encuetra pelis salga
  //el mensaje de 'Sorry not found' que hemos puesto en App.js

  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    .then(res => res.json())
    .then(results => {
    const { Search = [], totalResults = '0' } = results
    console.log({ Search, totalResults})
    {this.props.onResults(Search)}
  })
}
  render() {
    return (
      <form onSubmit={this._handelSubmit}>
        <div className="field has-addons">
        <div className="control">
          <input
          className="input"
          onChange={this._handleChange}
          type="text"
          placeholder="Find a movie"/>
        </div>
        <div className="control">
          <button className="button is-info">
            Search
          </button>
        </div>
      </div>
      </form>

)
  }
}
