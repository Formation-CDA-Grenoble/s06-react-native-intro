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

  render = () => {
    const { addItem } = this.props;
    const { currentText } = this.state;

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <NameInput
          style={{
            width: '80%',
            borderColor: '#CCC',
            borderWidth: 1,
          }}
          placeholder="Todo name"
          onChangeText={this.handleChangeText}
          value={currentText} />
        <AddButton title="Add" onPress={() => addItem(currentText)} />
      </View>
    );
  }
}

export default AddTodo;
