import React from 'react'

export default React.createClass({

  render: function() {
    return (
      <li className="slds-feed__item">
        <div className="slds-media slds-comment slds-hint-parent">
          <div className="slds-media__figure">
            <div className="slds-avatar slds-avatar--circle slds-avatar--medium">
              <a className="#void" title="Jason Rodgers">
                <img src="./vendor/salesforce-lightning-design-system/assets/images/avatar1.jpg" alt="avatar" />
              </a>
            </div>
          </div>
          <div className="slds-media__body">
            <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
              <p className="slds-truncate">
                <a href="#void" title="Design Systems">{this.props.author}</a>
              </p>
            </div>
            <div className="slds-comment__content slds-text-longform">{this.props.text}</div>
          </div>
        </div>
      </li>
    );
  }
})