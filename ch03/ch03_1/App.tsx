import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView, {backgroundColor: 'black'}]}>
      <Text style={[styles.text, {color: 'white'}]}>Hello my friend</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});
