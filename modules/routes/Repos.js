import React from 'react'
import NavLink from '../components/NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

  // add this method
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    browserHistory.push(path)
    console.log(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul className="slds-list--dotted">
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="slds-input repos-input" placeholder="userName"/> / {' '}
              <input type="text" className="slds-input repos-input" placeholder="repo"/>{' '}
              <button type="submit" className="slds-button slds-button--brand">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})