import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { firebaseService } from './services';
import Loader from './src/components/common/Loader';
import Chat from './src/components/chat';


const App: () => React$Node = () => {

  // const [user, setUser] = useState(null)

  // useEffect(
  //   function () {
  //     firebaseService.signIn()
  //       .then(({ user, error }) => {
  //         if (error) {
  //           Alert.alert('Something went wrong')
  //           return
  //         }

  //         setUser(user)
  //       })
  //   },
  //   [false]
  // )

  // if (!user) {
  //   return <>
  //     <Loader />
  //   </>
  // }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Chat />
    </>
  )
};

export default App;
