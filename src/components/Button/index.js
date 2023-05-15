import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Button(props) {

  const { title, disabled, style } = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={[styles.container, style]}
      disabled={disabled || false}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

