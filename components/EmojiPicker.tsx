import * as React from 'react';
import { Text, View } from 'react-native';
import {
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import EmojiRenderItem from './EmojiRenderItem';
import emojis from './emojis.json';
import { useEmojiPickerAnimation } from './useEmojiPickerAnimation';

export type EmojiPickerRef = {
    show: () => void;
    hide: () => void;
};

interface EmojiPickerProps {
    setEmoji: (emoji: string) => void;
    height?: number;
}

const EmojiPicker = React.forwardRef<EmojiPickerRef, EmojiPickerProps>(
    ({ setEmoji, height = 0.85 }, ref) => {
        const { animStyle, show, hide } = useEmojiPickerAnimation(height);

        React.useImperativeHandle(ref, () => ({
            show,
            hide,
        }));

        // memo update function to prevent rerendering render item onPress
        const updateEmoji = React.useCallback(em => {
            setEmoji(em);
            hide();
        }, []);

        return (
            <Animated.View style={animStyle}>
                <View>
                    <TouchableWithoutFeedback onPress={hide}>
                        <Text>close</Text>
                    </TouchableWithoutFeedback>
                </View>

                <FlatList
                    style={{ width: '100%', height: '100%' }}
                    data={emojis}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <EmojiRenderItem {...item} setEmoji={updateEmoji} />
                    )}
                />
            </Animated.View>
        );
    }
);

const MemoedEmojiPicker = React.memo(EmojiPicker);

export default MemoedEmojiPicker;
