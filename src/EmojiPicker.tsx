import * as React from 'react';
import { useColorScheme } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Color } from './constants';
import EmojiPickerTopBar, { TopBar } from './EmojiPickerTopBar';
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
    topBar?: TopBar;
}

const EmojiPicker = React.forwardRef<EmojiPickerRef, EmojiPickerProps>(
    ({ setEmoji, height = 0.85, topBar }, ref) => {
        const { animStyle, show, hide } = useEmojiPickerAnimation(height);

        const scheme = useColorScheme();

        const backgroundColor =
            scheme === 'dark' ? Color.darkgrey : Color.lightgrey;

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
                <EmojiPickerTopBar topbar={topBar} hide={hide} />

                <FlatList
                    style={{ width: '100%', height: '100%', backgroundColor }}
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
