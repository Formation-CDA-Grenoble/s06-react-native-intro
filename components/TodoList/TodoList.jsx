import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { TodoItem } from './TodoItem';
import ResetButton from './ResetButton';

const todoItems = [
  { text: "Element 1" },
  { text: "Element 2" },
  { text: "Element 3" },
  { text: "Element 4" },
];

class TodoList extends Component {
  state = {
    data: [...todoItems],
  };

  deleteItem = (index) => () => {
    const { data } = this.state;

    data.splice(index, 1);
    this.setState({ data });
  }

  resetItems = () => {
    this.setState({ data: [...todoItems] });
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
      <ResetButton title="Reset" onPress={this.resetItems} />
    </View>
  ;
}

export default TodoList;
