import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import Card from '../Card';

export default function InfoCard({ title, content, style }) {

  return (
    <Card style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </Card>
  );
}

