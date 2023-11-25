import {
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
// import MyComp from './my-comp';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  // const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const Stack = createNativeStackNavigator();

  let condition = true;

  let dynamicStyles = condition ? styles.text : styles.textRed;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {id: n, name: `Item ${n}`};
    data.push(item);
  }

  const renderItem = ({...item}) => <Text> {item.text} </Text>;

  // const handleTextInput = () => {
  //   setInputText('');
  // };

  // const handlePress = () => {
  //   // some code
  // };
  const addTask = taskText => {
    if (tasks.includes(taskText)) {
      alert('Task already exists!');
    } else {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <NavigationContainer>
      <ScrollView style={styles.container}>
        {/* <Text style={dynamicStyles}>Hello World</Text> */}
        {/* <MyComp /> */}
        <Image source={require('./myPic.jpg')} style={styles.image} />
        {/* <TextInput
        placeholder="Please enter your name."
        value={inputText}
        onChangeText={handleTextInput}
      /> */}
        {/* <Button title="A button!" onPress={handlePress} /> */}
        {/* <FlatList data={data} renderItem={renderItem} /> */}
        <Text style={dynamicStyles}>My To Do List</Text>
        <ToDoForm
          addTask={addTask}
          // value={inputText}
          // onChangeText={handleTextInput}
        />
        <View style={styles.line}></View>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //alignItems: 'center', // only work when using <View>, use <ScrollView> cannot use alignItems
  },
  text: {
    fontSize: 30,
    color: 'black',
    // margin: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  textRed: {
    fontSize: 20,
    color: 'red',
  },
  image: {
    width: 240,
    height: 150,
    left: 85,
    //alignItems: 'center',
    // width: 200,
    // height: 150,
  },
  line: {
    height: 1.2,
    backgroundColor: 'lightgray',
  },
});

export default App;
