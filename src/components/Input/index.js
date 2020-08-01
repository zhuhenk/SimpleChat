import React, { useCallback, useState } from 'react'
import { TextInput, View } from 'react-native'
import Button from "../common/Button"
import styles from './styles'

export default function Input() {
    const [message, setMessage] = useState('')

    const handlePress = useCallback(
        function () {
            alert(message);
        },
        [message]
    )

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Write you message" />
            </View>

            <Button text="Send" onPress={handlePress} />
        </View>
    );
}