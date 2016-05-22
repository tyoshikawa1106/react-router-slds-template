import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
      subjectVal: ""
    }
  },

  _onAdd: function(){
    var newTodo = this.refs.subject.value;
    if (!newTodo) {
      alert('値を入力してください');
      return false;
    }

    this.props.onAdd(newTodo);
    this.setState({subjectVal: ""});
  },

  _onChange: function(e){
    this.setState({
      subjectVal: e.target.value
    });
  },

  render: function(){
    return (
      <div className="slds-box slds-m-bottom--small">
        <div className="slds-form-element">
          <div className="slds-form-element__control slds-input-has-fixed-addon">
            <input className="slds-input" type="text" value={this.state.subjectVal} ref="subject" placeholder="Input your new todo" onChange={this._onChange}/>
            <span className="slds-form-element__addon">
              <button className="slds-button slds-button--brand" onClick={this._onAdd}>Add</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
})