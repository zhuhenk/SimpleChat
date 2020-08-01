/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Chat from './src/components/chat';

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
      <Chat />
    </>
  );
};

export default App;
