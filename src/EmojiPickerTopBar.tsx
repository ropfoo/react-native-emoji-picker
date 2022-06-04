import * as React from 'react';
import { StyleSheet, useColorScheme, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Color } from './constants';

interface EmojiPickerTopBarProps {
    hide: () => void;
}

export default function EmojiPickerTopBar({
    hide,
}: EmojiPickerTopBarProps): JSX.Element {
    const scheme = useColorScheme();

    const backgroundColor =
        scheme === 'dark' ? Color.darkgrey : Color.lightgrey;

    return (
        <View style={[style.wrapper, { backgroundColor }]}>
            <TouchableWithoutFeedback onPress={hide}>
                <Text>close</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',
    },
});
