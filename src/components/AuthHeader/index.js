import React, { useState } from 'react';
import { styles } from './styles';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../Input';

const iconSize = 20;

export default function AuthHeader({ title, showBack = false, onBack, showLogout = false, onLogout, showSearch = false, onSearch, keyword, setKeyword }) {

  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.actions}>
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
              <Pressable style={styles.iconButton} onPress={onSearch || toggleSearchInput}>
                <Icon
                  name={showSearchInput ? 'close' : 'search'}
                  style={[styles.icon, styles.left]}
                  size={iconSize}
                />
              </Pressable>
            )
          }
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actions}>
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
      {
        showSearchInput ? (
          <View style={styles.searchContainer}>
            <Input
              inputMode='text'
              placeholder='Search'
              value={keyword}
              containerStyle={styles.searchInnerContainer}
              style={styles.searchInput}
              onChangeText={v => setKeyword(v)}
            />
          </View>
        ) : (keyword && (
          <Text style={styles.hiddenSearchText}>Current search : {keyword}</Text>
        ))
      }
    </View>
  );
}
