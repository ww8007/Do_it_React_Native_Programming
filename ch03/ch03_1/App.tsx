import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Colors} from 'react-native-paper';
import Color from 'color';

console.log(Colors.blue500);

export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>Hello my friend</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
});
