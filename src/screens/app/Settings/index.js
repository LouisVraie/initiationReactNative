import React, { useContext } from 'react';
import { styles } from './styles';
import { Pressable, ScrollView, Text, View } from 'react-native';
import ActionCard from '../../../components/ActionCard';
import Header from '../../../components/Header';
import { UserContext } from '../../../../App';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Settings() {

  const { user } = useContext(UserContext);

  const edit = () => {

  };

  return (
    <ScrollView>
      <Header title='Settings' />
      <View style={styles.container}>
        <View>
          <View style={styles.titleWithIcon}>
            <Text style={styles.title}>Personal Information</Text>
            <Pressable style={styles.edit} onPress={edit}>
              <Icon
                name='chevron-back'
                style={[styles.icon]}
                size={24}
              />
            </Pressable>
          </View>

        </View>
        <View>
          <Text style={styles.title}>Help Center</Text>
          <ActionCard title='FAQ' style={styles.actionCard} />
          <ActionCard title='Contact Us' style={styles.actionCard} />
          <ActionCard title='Privacy & Terms' style={styles.actionCard} />
        </View>
      </View>
    </ScrollView>
  );
}