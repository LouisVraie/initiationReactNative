import React from 'react';
import { styles } from './styles';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const iconSize = 20;

export default function Header({ title, showBack = false, onBack, showLogout = false, onLogout, showSearch = false, onSearch, keyword }) {
  return (
    <View style={styles.container}>
      <View>
        {
          showBack && (
            <Pressable style={styles.iconButton} onPress={onBack}>
              <Icon
                name='chevron-back'
                style={[styles.icon, styles.left]}
                size={iconSize}
              />
            </Pressable>
          )
        }
        {
          showSearch && (
            <Pressable style={styles.iconButton} onPress={onSearch}>
              <Icon
                name='search'
                style={[styles.icon, styles.left]}
                size={iconSize}
              />
            </Pressable>
          )
        }
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        {
          showLogout && (
            <Pressable style={styles.iconButton} onPress={onLogout}>
              <Icon
                name='log-out-outline'
                style={[styles.icon, styles.right]}
                size={iconSize}
              />
            </Pressable>
          )
        }
      </View>
    </View>
  );
}
