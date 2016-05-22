import React from 'react'

export default React.createClass({
  _onDelete: function(i){
    this.props.onDelete(i);
  },

  render: function() {
    return (
      <ul className="timeline">
        {
          this.props.todos.map(function(todo,i){
            return (
              <li className="slds-timeline__item" key={i}>
                <span className="slds-assistive-text">Task</span>
                <div className="slds-media">
                  <div className="slds-media__body">
                    <div className="slds-media slds-media--timeline slds-timeline__media--task">
                      <div className="slds-media__figure">
                        <svg aria-hidden="true" className="slds-icon slds-icon-standard-task slds-timeline__icon">
                          <use xlinkHref="./vendor/salesforce-lightning-design-system/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
                        </svg>
                      </div>
                      <div className="slds-media__body">
                        <div className="slds-media slds-tile slds-media--small">
                          <div className="slds-media__figure">
                            <label className="slds-checkbox">
                              <input type="checkbox" onClick={this._onDelete.bind(this,i )}/>
                              <span className="slds-checkbox--faux"></span>
                              <span className="slds-form-element__label slds-assistive-text">Hello</span>
                            </label>
                          </div>
                          <div className="slds-media__body">
                            <p className="slds-tile__title slds-truncate">
                              {(() => {
                                if (todo.status == 0) { 
                                  return <a href="#">{todo.item}</a>
                                } else {
                                  return <a href="#"><s>{todo.item}</s></a>
                                }
                              })()}
                            </p>
                            <ul className="slds-tile__detail slds-list--horizontal slds-text-body--small">
                              <li className="slds-list__item slds-m-right--large">
                                <span>Owner:</span>
                                <span className="slds-m-left--xx-small"><a href="#">Taiki</a></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          },this)
        }
      </ul>
    );
  }
})