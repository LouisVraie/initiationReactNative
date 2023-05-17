/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function LinedText(props) {

  const { text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{` ${text} `}</Text>
      <View style={styles.line} />
    </View>
  );
}

