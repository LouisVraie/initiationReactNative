import React, { useState } from 'react';
import { Text, TextInput, View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';
import eye from '../../assets/eye.png';
import eyeClosed from '../../assets/eye_closed.png';

export default function Input({ label, isPassword, multiline = false, containerStyle, style, ...props }) {
  const [hidePass, setHidePass] = useState(true);

  const onEyePressed = () => {
    setHidePass(!hidePass);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <View style={[styles.inputContainer]}>
        <TextInput
          {...props}
          multiline={multiline}
          style={[styles.input, style, multiline ? styles.inputTextAlign : null]}
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

