/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList, SafeAreaView,
  StatusBar, StyleSheet,
  View
} from 'react-native';
import Input from './src/components/input';
import Message from './src/components/Message';


const App: () => React$Node = () => {
  const mock = [
    { id: 1, message: 'Hello', side: 'left' },
    { id: 2, message: 'Hi!', side: 'right' },
    { id: 3, message: 'Hello', side: 'left' },
    { id: 4, message: 'Hi!', side: 'right' }
  ]

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.messagesContainer}>
          <FlatList
            inverted
            data={mock}
            keyExtractor={function (item) {
              return item.id
            }}
            renderItem={function ({ item }) {
              return (
                <Message side={item.side} message={item.message} />
              )
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    height: '100%',
    paddingBottom: 100
  },
  inputContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
    paddingLeft: 20,
    borderTopWidth: 1,
  }
});

export default App;
