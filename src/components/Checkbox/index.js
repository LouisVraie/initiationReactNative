import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import check from '../../assets/check.png';

export default function Input(props) {
  const { label, children } = props;
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxPressed = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>

      <Pressable
        onPress={onCheckboxPressed}
      >
        <View
          style={[
            styles.checkboxContainer,
            isChecked ? styles.checkboxContainerChecked : null
          ]}
        >
          {
            isChecked && <Image style={styles.icon} source={check} />
          }
        </View>
      </Pressable>

      <View style={styles.children}>{label || children}</View>

    </View>
  );
}

