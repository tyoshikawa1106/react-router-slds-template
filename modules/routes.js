import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './routes/About'
import Repos from './routes/Repos'
import Repo from './routes/Repo'
import Home from './routes/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)
