import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import check from '../../assets/check.png';

export default function Checkbox(props) {
  const { label, children, checked, onCheck } = props;

  return (
    <View style={styles.container}>

      <Pressable
        onPress={() => {
          onCheck(!checked);
        }}
      >
        <View
          style={[
            styles.checkboxContainer,
            checked ? styles.checkboxContainerChecked : null
          ]}
        >
          {
            checked && <Image style={styles.icon} source={check} />
          }
        </View>
      </Pressable>

      <View style={styles.children}>{label || children}</View>

    </View>
  );
}

