import React from 'react';
import { Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    color: '#3A367F',
  },
});

const Title = props =>
  <Text style={style.title}>{props.children}</Text>
;

export default Title;
