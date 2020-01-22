import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { TodoItem } from './TodoItem';

const todoItems = [
  { text: "Element 1" },
  { text: "Element 2" },
  { text: "Element 3" },
  { text: "Element 4" },
];

class TodoList extends Component {
  state = {
    data: todoItems,
  };

  deleteItem = (index) => () => {
    const { data } = this.state;

    data.splice(index, 1);
    this.setState({ data });
  }

  render = () =>
    <View>
      {this.state.data.map( (item, index) =>
        <TodoItem
          key={`todoItem${index}`}
          deleteItem={this.deleteItem(index)}
        >
          {item.text}
        </TodoItem>
      )}
    </View>
  ;
}

export default TodoList;
