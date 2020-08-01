import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import Input from '../Input'
import Message from '../Message'
import { chatRoomStyles as styles } from '../../styles'


export default function Chat() {
    const mock = [
        { id: "1", message: 'Hello', side: 'left' },
        { id: "2", message: 'Hi!', side: 'right' },
        { id: "3", message: 'Hello', side: 'left' },
        { id: "4", message: 'Hi!', side: 'right' }
    ]

    return (
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
    )
}