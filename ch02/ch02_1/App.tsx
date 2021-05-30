import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function App() {
  const isLoading = true;

  return (
    <SafeAreaView>
      {isLoading && <Text>Hellow Jsx</Text>}
      {!isLoading && <Text>Not Render</Text>}
    </SafeAreaView>
  );
}
