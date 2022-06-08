import * as React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Color } from './constants';
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
    const scheme = useColorScheme();

    const backgroundColor =
        scheme === 'dark' ? Color.darkgrey : Color.lightgrey;

    const titleBackgroundColor = scheme === 'dark' ? Color.black : Color.white;

    const borderColor =
        scheme === 'dark' ? Color.darkmidgrey : Color.lightmidgrey;

    const updateEmoji = React.useCallback(em => {
        props.setEmoji(em);
    }, []);

    return (
        <View style={[style.wrapper]}>
            <View
                style={[
                    style.titleWrapper,
                    { borderColor, backgroundColor: titleBackgroundColor },
                ]}>
                <Text style={[style.title, { color: Color.grey }]}>
                    {props.name.toUpperCase()}
                </Text>
            </View>
            <View style={style.emojisWrapper}>
                <FlatList
                    contentContainerStyle={{ backgroundColor, width: '100%' }}
                    data={props.data}
                    numColumns={8}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Emoji
                            key={item.name}
                            emoji={item}
                            onPress={updateEmoji}
                        />
                    )}
                />
            </View>
        </View>
    );
});

export default EmojiRenderItem;

const style = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
    },
    emojisWrapper: {
        alignItems: 'center',
    },
    titleWrapper: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 13,
        color: Color.grey,
        paddingTop: 25,
    },
    list: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: Color.lightgrey,
    },
    listRow: {},
});
