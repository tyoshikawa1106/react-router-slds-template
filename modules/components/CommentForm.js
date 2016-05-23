import React from 'react'

export default React.createClass({

  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <div className="slds-box slds-m-bottom--small">
        <form onSubmit={this.handleSubmit}>
          <div className="slds-form-element">
            <label className="slds-form-element__label" htmlFor="text-input-01">NickName</label>
            <div className="slds-form-element__control">
              <input type="text" className="slds-input" id="text-input-01" placeholder="Your name"
                        value={this.state.author} onChange={this.handleAuthorChange} />
            </div>
          </div>
          <div className="slds-form-element">
            <label className="slds-form-element__label" htmlFor="text-input-02">Comments</label>
            <div className="slds-form-element__control">
              <input type="text" className="slds-input" placeholder="Say something..."
                        value={this.state.text} onChange={this.handleTextChange} />
            </div>
          </div>
          <div className="slds-m-top--small">
            <button className="slds-button slds-button--brand">Post</button>
          </div>
        </form>
      </div>
    );
  }
})