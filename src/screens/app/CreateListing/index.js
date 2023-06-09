import React, { useState } from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Upload from '../../../components/Upload';

export default function CreateListing({ navigation }) {

  const [values, setValues] = useState({});

  const goBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  return (
    <ScrollView>
      <AuthHeader title='Create a new listing' showBack onBack={goBack}/>
      <View style={styles.container}>
        <Upload
          label='Upload photos'
        />
        <Input
          label='Title'
          inputMode='text'
          placeholder='Listing Title'
          value={values?.title}
          onChangeText={v => onChange('title', v)}
        />
        <Input
          label='Category'
          inputMode='text'
          placeholder='Select the category'
          value={values?.category}
          onChangeText={v => onChange('category', v)}
        />
        <Input
          label='Price'
          inputMode='decimal'
          placeholder='Enter price in USD'
          value={values?.price}
          onChangeText={v => onChange('price', v)}
        />
        <Input
          label='Description'
          inputMode='text'
          multiline
          numberOfLines={4}
          placeholder='Tell us more...'
          value={values?.description}
          onChangeText={v => onChange('description', v)}
        />
        <Button title='Submit' buttonStyle={styles.button}/>
      </View>
    </ScrollView>
  );
}