import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ChampionsPage from './pages/Champions'
import ErrorPage from './pages/Error'
import ChampionPage from './pages/champion'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/champions" component={ChampionPage} />
      <Route exact path="/" component={ChampionsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
