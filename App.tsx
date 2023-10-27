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
import MyComp from './my-comp';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import React, {useState} from 'react';

function App(): JSX.Element {
  const [inputText, setInputText] = useState('');

  let condition = true;

  let dynamicStyles = condition ? styles.text : styles.textRed;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {id: n, name: `Item ${n}`};
    data.push(item);
  }

  const renderItem = ({...item}) => <Text> {item.text} </Text>;

  const handleTextInput = (text: React.SetStateAction<string>) => {
    setInputText(text);
  };

  const handlePress = () => {
    // some code
  };
  return (
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
      <ToDoForm />
      <ToDoList />
    </ScrollView>
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
});

export default App;
