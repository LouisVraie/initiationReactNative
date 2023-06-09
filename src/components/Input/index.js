import React, { useState } from 'react';
import { Text, TextInput, View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';
import eye from '../../assets/eye.png';
import eyeClosed from '../../assets/eye_closed.png';

export default function Input({ label, isPassword, containerStyle, style, ...props }) {
  const [hidePass, setHidePass] = useState(true);

  const onEyePressed = () => {
    setHidePass(!hidePass);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={Boolean(isPassword && hidePass)}
        />
        {
          isPassword && (
            <Pressable
              onPress={onEyePressed}
            >
              <Image
                style={styles.icon}
                source={hidePass ? eye : eyeClosed}
              />
            </Pressable>
          )
        }
      </View>
    </View>
  );
}

