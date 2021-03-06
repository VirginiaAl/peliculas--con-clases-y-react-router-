import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:movieId' component={Detail} />
        </Switch>
      </div>
    )
  }
}

export default App;
