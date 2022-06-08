import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface EmojiProps {
    emoji: {
        character: string;
        name: string;
    };
    onPress: (emoji: string) => void;
    size?: number;
}

const Emoji = React.memo<EmojiProps>(({ emoji, size = 28, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPress(emoji.character)}>
            <View style={[style.wrapper]}>
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
