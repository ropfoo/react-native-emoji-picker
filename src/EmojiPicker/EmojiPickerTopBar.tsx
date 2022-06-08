import * as React from 'react';
import { StyleSheet, useColorScheme, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from './constants';

export type TopBar = {
    closeElement?: React.ReactNode;
    title?: string;
};

interface EmojiPickerTopBarProps {
    hide: () => void;
    topbar?: TopBar;
}

export default function EmojiPickerTopBar({
    hide,
    topbar,
}: EmojiPickerTopBarProps): JSX.Element {
    const scheme = useColorScheme();

    const backgroundColor =
        scheme === 'dark' ? Color.darkgrey : Color.lightgrey;

    const borderColor =
        scheme === 'dark' ? Color.darkmidgrey : Color.lightmidgrey;

    const titleColor = scheme === 'dark' ? Color.lightgrey : Color.darkgrey;

    return (
        <View style={[style.wrapper, { backgroundColor, borderColor }]}>
            <View style={[style.item, { width: 70 }]}></View>
            <Text style={[style.item, style.title, { color: titleColor }]}>
                {topbar?.title}
            </Text>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[style.item, { width: 70, alignItems: 'flex-end' }]}
                onPress={hide}>
                <>
                    {topbar?.closeElement ?? (
                        <Text style={style.text}>close</Text>
                    )}
                </>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
    },
    item: {
        padding: 10,
    },
    title: {
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        color: Color.blue,
    },
});
