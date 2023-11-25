import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}) {
  const [date, setDate] = useState('');
  const dateNow = new Date().toLocaleDateString();
  useEffect(() => {
    setDate(dateNow);
  }, []);

  return (
    <View>
      <Text style={styles.textForTitle}>Welcome to ToDoApp</Text>
      <Text style={styles.textForName}>Tzechi</Text>
      <Text onChange={setDate}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textForTitle: {
    fontSize: 30,
    color: 'cyan',
    textAlign: 'center',
  },
  textForName: {
    fontSize: 10,
    color: 'cyan',
    textAlign: 'center',
  },
});
