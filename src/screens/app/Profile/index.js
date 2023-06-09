import React, { useContext } from 'react';
import { styles } from './styles';
import { ScrollView, Text, View } from 'react-native';
import ActionCard from '../../../components/ActionCard';
import AuthHeader from '../../../components/AuthHeader';
import { UserContext } from '../../../../App';
import Button from '../../../components/Button';

export default function Profile({ navigation }) {

  const { user, setUser, listing } = useContext(UserContext);

  const signOut = () => {
    setUser(null);
  };

  const redirectTo = (path) => {
    navigation.navigate(path);
  };

  return (
    <ScrollView>
      <AuthHeader title='Profile' showLogout onLogout={signOut}/>
      <View style={styles.container}>
        <View style={styles.userDataContainer}>
          <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <ActionCard title='My Listing' subtitle={`Already have ${listing.length} listing`} style={styles.actionCard} onPress={() => redirectTo('MyListing')} />
        <ActionCard title='Settings' subtitle='Account, FAQ, Contact'style={styles.actionCard} onPress={() => redirectTo('Settings')}/>
        <Button title='Add a new listing' buttonStyle={styles.button} onPress={() => redirectTo('CreateListing')}/>
      </View>
    </ScrollView>
  );
}