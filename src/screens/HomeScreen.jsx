import MainLayout from '../layouts/MainLayout';
import React from 'react';
import {Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}
