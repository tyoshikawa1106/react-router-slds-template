import React from 'react'
import { render } from 'react-dom'
import App from './modules/components/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './modules/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)