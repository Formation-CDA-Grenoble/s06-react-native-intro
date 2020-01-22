import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DeleteButton from './DeleteButton';
import DoneToggle from './DoneToggle';

const style = StyleSheet.create({
  todoItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 20,
  },
  done: {
    color: '#CCC',
    textDecorationLine: 'line-through',
  },
});

class TodoItem extends Component {
  state = {
    done: false,
  }

  toggleDone = (newValue) => {
    this.setState({ done: newValue });
  }

  render = () => {
    const { done } = this.state;
    const { children, deleteItem } = this.props;

    let textStyle;
    if (done) {
      textStyle = [style.todoText, style.done];
    } else {
      textStyle = style.todoText;
    }

    return (
      <View style={style.todoItem}>
        <DoneToggle onValueChange={this.toggleDone} value={done} />
        <Text style={textStyle}>{children}</Text>
        <DeleteButton title="Delete" onPress={deleteItem} />
      </View>
    );
  }
}

export default TodoItem;
