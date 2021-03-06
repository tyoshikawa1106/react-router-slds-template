import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from './Header'
import NavLink from './NavLink'
import Home from '../routes/Home'

export default React.createClass({
  render() {
    return (
      <div className="slds">
        <Header />
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 sideMenu">
            <ul className="slds-list--vertical slds-has-dividers">
              <li className="slds-list__item nav-list"><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
              <li className="slds-list__item nav-list"><NavLink to="/about">About</NavLink></li>
              <li className="slds-list__item nav-list"><NavLink to="/repos">Repos</NavLink></li>
              <li className="slds-list__item nav-list"><NavLink to="/todos">Todos</NavLink></li>
              <li className="slds-list__item nav-list"><NavLink to="/discussion">Discussion</NavLink></li>
            </ul>
          </nav>
          <main className="slds-col slds-size--10-of-12">
            <div className="slds-m-around--small">
              {this.props.children || <Home/>}
            </div>
          </main>
        </div>
      </div>
    )
  }
})