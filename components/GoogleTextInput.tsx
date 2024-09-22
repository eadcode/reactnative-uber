import { GoogleInputProps } from '@/types/type';
import { View } from 'react-native';

const GoogleTextInput = ({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress,
}: GoogleInputProps) => {
    return (
        <View className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}></View>
    );
};

export default GoogleTextInput;
