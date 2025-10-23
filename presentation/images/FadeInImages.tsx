import { useAnimation } from '@/hooks/useAnimation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

/* interface Props extends ImageProps {
    className?: string;
} */
interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeinImages = ({ style, uri }: Props) => {

    const [isLoading, setIsLoading] = useState(true)
    const { animatedOpacity, fadeIn } = useAnimation()

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            { isLoading && (
                <ActivityIndicator 
                    style={{ position: 'absolute' }}
                    size={ 30 } 
                    color={'grey'} 
                />
              )
            }

            <Animated.Image 
                source={{ uri }}
                style={ [style, { opacity: animatedOpacity }] }
                onLoadEnd={ () => {
                    fadeIn({})
                    setIsLoading(false)
                }}
            />
        </View>
    )
}

export default FadeinImages