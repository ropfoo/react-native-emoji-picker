import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EmojiPicker, { EmojiPickerRef } from './src/EmojiPicker';

export default function App() {
    const emojiPickerRef = React.useRef<EmojiPickerRef>(null);
    const [emoji, setEmoji] = React.useState('');
    return (
        <>
            <View style={styles.container}>
                <Text>Emoji: {emoji}</Text>
                <Button
                    title='show emojis'
                    onPress={() => emojiPickerRef.current?.show()}
                />
            </View>
            <EmojiPicker
                ref={emojiPickerRef}
                setEmoji={em => setEmoji(em)}
                height={0.5}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
