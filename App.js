import React, { useEffect, useState } from 'react';
import Chat from './src/components/Chat';
import Loader from './src/components/common/Loader';
import { firebaseService } from './src/services';

const App: () => React$Node = () => {

  const [user, setUser] = useState(null)

  useEffect(
    function () {
      firebaseService.signIn()
        .then(({ user, error }) => {
          if (error) {
            Alert.alert('Something went wrong')
            return
          }

          setUser(user)
        })
    },
    [false]
  )

  if (!user) {
    return <>
      <Loader />
    </>
  }

  console.log(user);

  return (
    <>
      <Chat />
    </>
  )
};

export default App;
