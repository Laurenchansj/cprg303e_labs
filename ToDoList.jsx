/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

// function App() {
export default function ToDoList({tasks}) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task) => (
        <Pressable key={Math.random()*100000000}>
          <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

// export default App;
