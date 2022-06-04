import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface EmojiProps {
    emoji: {
        character: string;
        name: string;
    };
    onPress: () => void;
    size?: number;
}

const Emoji = React.memo<EmojiProps>(({ emoji, size = 20, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={style.wrapper}>
                <Text style={{ fontSize: size }}>{emoji.character}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
});

export default Emoji;

const style = StyleSheet.create({
    wrapper: {
        padding: 7,
    },
    text: {
        fontSize: 22,
    },
});
