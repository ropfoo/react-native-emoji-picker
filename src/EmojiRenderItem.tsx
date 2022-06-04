import * as React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Color } from './constants';
import Emoji from './Emoji';
import { chunk } from './helper';

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

    // const segments = props.data.reduce((segs, emoji) => {}, []);
    const newArray = React.useMemo(() => chunk(props.data, 2), [props.data]);

    console.log(newArray);

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
            <FlatList
                contentContainerStyle={{ backgroundColor, width: '100%' }}
                data={props.data}
                numColumns={8}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Emoji key={item.name} emoji={item} onPress={updateEmoji} />
                )}
            />
            {/* <View style={style.list}>
                {newArray.map((emoji, index) => {
                    console.log('TTTTTT', emoji);
                    return (
                        <Emoji
                            key={emoji.name}
                            emoji={emoji}
                            onPress={() => props.setEmoji(emoji.character)}
                        />
                    );
                })}
            </View> */}
        </View>
    );
});

export default EmojiRenderItem;

const style = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
    },
    titleWrapper: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 13,
        color: Color.grey,
        paddingTop: 30,
    },
    list: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: Color.lightgrey,
    },
    listRow: {},
});
