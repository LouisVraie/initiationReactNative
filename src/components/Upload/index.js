import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import UploadedPhotoItem from '../UploadedPhotoItem';

export default function Upload({ label, style }) {

  const addPhoto = () => {
    console.log('Add photo');
  };

  return (
    <View style={[styles.container, style]}>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <View style={styles.inputContainer}>
        <Pressable style={[styles.itemContainer, styles.itemContainerAdd]} onPress={addPhoto}>
          <View style={styles.addIcon}>
            <Icon
              name='add'
              color={colors.white}
              size={24}
            />
          </View>
        </Pressable>
        <UploadedPhotoItem />
      </View>
    </View>
  );
}

