import * as React from 'react';
import { View, Text } from 'react-native';
import Emoji from './Emoji';

interface EmojiRenderItemProps {
    setEmoji: (emoji: string) => void;
    name: string;
    emoji: string;
    data: {
        name: string;
        character: string;
    }[];
}

const EmojiRenderItem = React.memo<EmojiRenderItemProps>(props => {
    return (
        <View style={{ justifyContent: 'center', padding: 10 }}>
            <Text>{props.name}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                {props.data.map(emoji => (
                    <Emoji
                        key={emoji.name}
                        emoji={emoji}
                        onPress={() => props.setEmoji(emoji.character)}
                    />
                ))}
            </View>
        </View>
    );
});

export default EmojiRenderItem;
