import React from 'react';
import { styles } from './styles';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';

export default function GoogleButton({ disabled, style, useDefault = false, ...props }) {

  return (
    <View>
      {
        useDefault ?
          <GoogleSigninButton
            disabled={disabled || false}
            style={[styles.container, style]}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            {...props}
          />
          :
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.container, style]}
            disabled={disabled || false}
            {...props}
          >
            <Icon
              name='logo-google'
              color={colors.white}
              size={28}
            />
          </TouchableOpacity>
      }
    </View>
  );
}

