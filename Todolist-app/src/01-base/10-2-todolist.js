import React, { Component } from 'react';
import './css/00-todolist.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    const storedList = localStorage.getItem('todolist');
    this.state = {
      list: storedList ? JSON.parse(storedList) : [],
      newItemText: '',
      editItemId: null,
      editText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  handleClickAdd = () => {
    const newItem = {
      id: Date.now(),
      mytext: this.state.newItemText,
    };
    this.setState((prevState) => ({
      list: [...prevState.list, newItem],
      newItemText: '',
    }), () => {
      localStorage.setItem('todolist', JSON.stringify(this.state.list));
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
    }), () => {
      localStorage.setItem('todolist', JSON.stringify(this.state.list));
    });
  };

  handleEdit = (id, text) => {
    this.setState({ editItemId: id, editText: text });
  };

  handleUpdate = () => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) => (
        item.id === prevState.editItemId ? { ...item, mytext: prevState.editText } : item
      )),
      editItemId: null,
      editText: '',
    }), () => {
      localStorage.setItem('todolist', JSON.stringify(this.state.list));
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newItemText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClickAdd}>Add</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.id === this.state.editItemId ? (
                <>
                  <input
                    type="text"
                    value={this.state.editText}
                    onChange={(event) => this.setState({ editText: event.target.value })}
                  />
                  <button onClick={this.handleUpdate}>Update</button>
                </>
              ) : (
                <>
                  <span>{item.mytext}</span>
                  <button onClick={() => this.handleDelete(item.id)}>del</button>
                  <button onClick={() => this.handleEdit(item.id, item.mytext)}>edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
        {this.state.list.length === 0 && <div>暫無待辦事項</div>}
      </div>
    );
  }
}
