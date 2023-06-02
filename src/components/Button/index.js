import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Button({ title, disabled, buttonStyle, titleStyle, ...props }) {

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={[styles.container, buttonStyle]}
      disabled={disabled || false}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

