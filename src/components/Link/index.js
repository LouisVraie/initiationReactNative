import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function Link({ title, onPress, disabled, style }) {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled || false}
    >
      <Text dataDetectorType='link' style={styles.title}>{title}</Text>
    </Pressable>
  );
}

