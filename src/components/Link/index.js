import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Link({ title, prefix, prefixStyle, onPress, disabled, style }) {
  return (
    <View
      style={[styles.container, style]}
    >
      {
        prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>
      }
      <Pressable
        onPress={onPress}
        disabled={disabled || false}
      >
        <Text dataDetectorType='link' style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

