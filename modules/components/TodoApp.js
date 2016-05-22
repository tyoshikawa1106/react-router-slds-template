import React from 'react'
import TodoCreator from './TodoCreator'
import TodoList from './TodoList'

export default React.createClass({

  getInitialState: function(){
    return {
      todos: []
    }
  },

  onAdd: function(newTodo){
    this.setState({
      todos : this.state.todos.concat({item:newTodo, status:0})
    });
  },

  onDelete: function(i){
    var targetTodo = this.state.todos[i];
    targetTodo.status = !targetTodo.status;
    this.setState({
      todos: this.state.todos
    });
  },


  render: function(){
    return (
      <div className="TodoApp">
        <TodoCreator onAdd={this.onAdd}/>
        <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
      </div>
    );
  }
})