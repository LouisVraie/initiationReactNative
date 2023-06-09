import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import defaultImage from '../../assets/default-image.png';

export default function UploadedPhotoItem({ thumbnail, style, imageStyle }) {

  const delPhoto = () => {
    console.log('Remove photo');
  };

  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, imageStyle]} source={ thumbnail ? { uri: thumbnail } : defaultImage} />
      <Pressable style={styles.delImageIcon} onPress={delPhoto}>
        <Icon
          name='close-circle-outline'
          color={colors.blue}
          size={24}
        />
      </Pressable>
    </View>
  );
}

