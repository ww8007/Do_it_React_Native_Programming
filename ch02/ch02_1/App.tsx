import React, {Children} from 'react';
import {PointPropType, SafeAreaView, ScrollView} from 'react-native';
import Person from './src/screens/Person';
import * as D from './src/data';

export default function App() {
  const people = D.makeArray(100).map(D.createRandomPerson);

  return (
    <SafeAreaView>
      <ScrollView>
        <Person person={people} />
      </ScrollView>
    </SafeAreaView>
  );
}
