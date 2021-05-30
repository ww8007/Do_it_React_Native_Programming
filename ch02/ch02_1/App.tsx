import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import * as D from './src/data';
export default function App() {
  const isLoading = true;
  const person = D.createRandomPerson();
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
      </SafeAreaView>
    );
  }
}
