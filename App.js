import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'take out trash', key: '1' },
    { text: 'work out', key: '2' },
    { text: 'wash dishes', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevToDos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevToDos
        ]
      });
    } else {
      Alert.alert('OOPS!', 'ToDos must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
    
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  },
});
