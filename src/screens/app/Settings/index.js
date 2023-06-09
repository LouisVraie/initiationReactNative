import React, { useContext, useState } from 'react';
import { styles } from './styles';
import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';
import ActionCard from '../../../components/ActionCard';
import AuthHeader from '../../../components/AuthHeader';
import { UserContext } from '../../../../App';
import InfoCard from '../../../components/InfoCard';
import editIcon from '../../../assets/edit.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/colors';

export default function Settings() {

  const { user, setUser } = useContext(UserContext);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(`${user?.firstName} ${user?.lastName}`);
  const [email, setEmail] = useState(user?.email);

  const handleNameChange = (value) => {
    setName(value.trim());
  };

  const handleEmailChange = (value) => {
    setEmail(value.trim());
  };

  const onSubmit = () => {
    if (name && email) {
      const [firstName, lastName] = name.split(' ');
      setUser(prev => ({ ...prev, firstName, lastName }));
      setEditing(false);
    } else {
      Alert.alert('You must fill all fields.');
    }
  };

  const edit = () => {
    setEditing(prev => !prev);
  };

  return (
    <ScrollView>
      <AuthHeader title='Settings' />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={[styles.titleContainer, styles.titleWithIcon]}>
            <Text style={styles.title}>Personal Information</Text>
            <Pressable style={styles.edit} onPress={edit}>
              {
                isEditing ?
                  <Icon
                    name='close'
                    color={colors.textSecondary}
                    size={24}
                  />
                  :
                  <Image source={editIcon} style={styles.icon}/>
              }
            </Pressable>
          </View>
          {
            isEditing ? (
              <View>
                <Input
                  label='Name'
                  inputMode='text'
                  placeholder='John Doe'
                  style={styles.input}
                  value={name}
                  onChangeText={handleNameChange}
                />
                <Input
                  label='Email'
                  inputMode='text'
                  placeholder='example@example.com'
                  style={styles.input}
                  value={email}
                  onChangeText={handleEmailChange}
                />
                <Button title='Save' buttonStyle={styles.input} onPress={onSubmit} />
              </View>
            ) : (
              <View>
                <InfoCard title='Name' content={name} style={styles.infoCard}/>
                <InfoCard title='Email' content={email} style={styles.infoCard}/>
              </View>
            )
          }

        </View>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Help Center</Text>
          </View>
          <ActionCard title='FAQ' style={styles.actionCard} titleStyle={styles.actionCardTitle}/>
          <ActionCard title='Contact Us' style={styles.actionCard} titleStyle={styles.actionCardTitle}/>
          <ActionCard title='Privacy & Terms' style={styles.actionCard} titleStyle={styles.actionCardTitle}/>
        </View>
      </View>
    </ScrollView>
  );
}