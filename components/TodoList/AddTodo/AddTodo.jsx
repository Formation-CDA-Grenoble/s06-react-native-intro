import React, { Component } from 'react';
import { View } from 'react-native';
import NameInput from './NameInput';
import AddButton from './AddButton';

class AddTodo extends Component {
  state = {
    currentText: '',
  }

  handleChangeText = (text) => {
    this.setState({ currentText: text });
  }

  handlePress = () => {
    const { addItem } = this.props;
    const { currentText } = this.state;
    addItem(currentText);
  }
  
  render = () => {
    const { currentText } = this.state;

    return (
      <View>
        <NameInput onChangeText={this.handleChangeText} value={currentText} />
        <AddButton title="Add" onPress={this.handlePress} />
      </View>
    );
  }
}

export default AddTodo;
