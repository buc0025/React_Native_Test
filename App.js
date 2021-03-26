import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Stanley');
  const [person, setPerson] = useState({ name: 'mario', age: 40});
  const [age, setAge] = useState(34);

  const [people, setPeople] = useState([
    { name: 'stanley', key: '1'},
    { name: 'nancy', key: '2'},
    { name: 'jason', key: '3'},
    { name: 'dan', key: '4'},
    { name: 'steveny', key: '5'},
    { name: 'mandy', key: '6'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    // fontSize: 20
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
