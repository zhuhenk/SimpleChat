import React from 'react'
import { Text, View } from 'react-native'
import { flattenedStyles, styles } from './styles'


export default function Message({ message, side }) {
    const isLeftSide = side === 'left'

    const containerStyles = isLeftSide ? styles.container : flattenedStyles.container
    const textContainerStyles = isLeftSide ? styles.textContainer : flattenedStyles.textContainer
    const textStyles = isLeftSide ? flattenedStyles.leftText : flattenedStyles.rightText

    return (
        <View style={containerStyles}>
            <View style={textContainerStyles}>
                <Text style={textStyles}>
                    {message}
                </Text>
            </View>
        </View>
    )
}