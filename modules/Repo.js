import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="slds-m-top--large slds-text-heading--large">
        <div className="slds-box">
          <h2>{this.props.params.repoName}</h2>
        </div>
      </div>
    )
  }
})