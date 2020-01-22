import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DeleteButton from './DeleteButton';

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
  }
});

const TodoItem = (props) =>
  <View style={style.todoItem}>
    <Text style={style.todoText}>{props.children}</Text>
    <DeleteButton title="Delete" onPress={props.deleteItem} />
  </View>
;

export default TodoItem;
