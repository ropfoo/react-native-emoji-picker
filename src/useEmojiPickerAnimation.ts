import { Dimensions } from 'react-native';
import {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    WithTimingConfig,
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

    const config: WithTimingConfig = {
        easing: Easing.ease,
        duration: 200,
    };

    const show = () => {
        'worklet';

        top.value = withTiming(SCREEN_HEIGHT * (1 - height), config);
    };

    const hide = () => {
        'worklet';

        (top.value = withTiming(SCREEN_HEIGHT)), config;
    };

    return {
        animStyle,
        show,
        hide,
    };
}
