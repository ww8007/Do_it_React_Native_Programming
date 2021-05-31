import React from 'react';
import {SafeAreaView} from 'react-native';
import {ArrowComponet} from './src/screens/ArrowComponet';
import Person from './src/screens/Person';
import * as D from './src/data';
export default function App() {
  const person = D.createRandomPerson();
  React.createContext;
  return (
    <SafeAreaView>
      <ArrowComponet />
      <Person person={person} />
    </SafeAreaView>
  );
}
