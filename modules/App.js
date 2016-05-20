import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from './Header'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        <div>
          {/* ... */}
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
})