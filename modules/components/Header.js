import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="slds-page-header myHeader" role="banner">
        <div className="slds-grid">
          <div className="slds-col slds-has-flexi-truncate">
            <p className="slds-text-heading--label">React Sample</p>
            <div className="slds-grid">
              <div className="slds-grid slds-type-focus slds-no-space">
                <h1 className="slds-page-header__title slds-truncate" title="React Router SLDS Template">React Router SLDS Template</h1>
              </div>
            </div>
          </div>
        </div>
        <p className="slds-text-body--small slds-page-header__info"></p>
      </div>
    )
  }
})