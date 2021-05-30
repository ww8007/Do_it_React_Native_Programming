import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function App() {
  const isLoading = true;
  const children = isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Text>Hello JSX!</Text>
  );
  return <SafeAreaView>{children}</SafeAreaView>;
}
