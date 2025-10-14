import { Href, router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import ThemedText from '../shared/ThemedText';

interface Props {
    name: string;
    icon: string;
    title: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({ 
    title, 
    icon, 
    name, 
    isFirst = false,
    isLast = false 
}: Props) => {

    const [routeName] = name.split('/')

    return (
        <Pressable
            onPress={() => router.push(routeName as Href)}
            className='bg-white'
        >
        <ThemedText type='h1' className='text-red-500/15 font-extrabold'>{title}</ThemedText>
        </Pressable>
    )
}

export default MenuItem