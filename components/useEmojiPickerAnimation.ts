import { Dimensions } from 'react-native';
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export function useEmojiPickerAnimation(height: number) {
    const top = useSharedValue(SCREEN_HEIGHT);

    const animStyle = useAnimatedStyle(() => ({
        backgroundColor: 'lightgrey',
        position: 'absolute',
        top: top.value,
        height: SCREEN_HEIGHT * height,
    }));

    const show = () => {
        'worklet';

        top.value = withTiming(SCREEN_HEIGHT * (1 - height));
    };

    const hide = () => {
        'worklet';

        top.value = withTiming(SCREEN_HEIGHT);
    };

    return {
        animStyle,
        show,
        hide,
    };
}
