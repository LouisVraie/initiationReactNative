import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Card from '../Card';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ActionCard({ title, subtitle, onPress, style }) {

  return (
    <Card style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.touchable}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Icon
          name='chevron-forward'
          style={styles.icon}
          size={20}
        />
      </TouchableOpacity>
    </Card>
  );
}

