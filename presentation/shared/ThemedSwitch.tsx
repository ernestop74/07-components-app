import { useThemeColor } from '@/hooks/use-theme-color';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
    text?:string;
    className?: string;
    value: boolean;


    onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android';


const ThemedSwitch = ({ className, text, value, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary')

    return (
        <Pressable
            className={`flex flex-row pl-3 pr-2 justify-between items-center active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {
                text ? <ThemedText type='h2'>{ text }</ThemedText> : <View />
            }
            
            <Switch 
                value={value}
                onValueChange={onValueChange}
                thumbColor={ isAndroid ? switchActiveColor : '' }
                //ios_backgroundColor={ value ? 'green' : 'red' }
                trackColor={{false: '#767577', true: switchActiveColor}}
            />        
        </Pressable>
    )
}

export default ThemedSwitch