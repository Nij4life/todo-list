import React from 'react';
import './App.css';
import TodoList from './todoList/TodoList';
import Input from './input';
import Header from './Header';


class App extends React.Component {
  state = {
    todoItems: [
      { id: 0 },
      { id: 1, checked: true, task: 'I will be sleep' },
      { id: 2, task: 'I go to the restroom' }
    ]
  }

  toggleTodoItem = (index) => {
    const { todoItems } = this.state;
    const todoItem = todoItems[index];
    todoItem.checked = !todoItem.checked;
    this.setState({ todoItems });
  }

  addTodoItem = (text) => {
    const { todoItems } = this.state;
    this.setState({ todoItems: [...todoItems, { id: todoItems.length, checked: false, task: text }] });
  }

  render() {
    const { todoItems } = this.state;

    return <div className='todo'>
      <Header />
      <Input addTodoItem={this.addTodoItem} />
      <TodoList todoItems={todoItems} toggleTodoItem={this.toggleTodoItem}></TodoList>
    </div>
  }

}

export default App;


