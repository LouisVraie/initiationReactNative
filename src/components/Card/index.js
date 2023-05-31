import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export default function Card({ children, style, ...props }) {

  return (
    <View
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </View>
  );
}

