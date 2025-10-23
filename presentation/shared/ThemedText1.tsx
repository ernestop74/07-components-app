import React from 'react';
import { Text, TextProps } from 'react-native';

type TextType = 'h1' | 'h2' | 'normal' | 'semi-bold' | 'link'

interface Props extends TextProps{
  className?: string;
  type?: TextType;
}

const TEXT_VALUES = {
    h1: 'text-3xl',
    h2: 'text-xl',
    normal: 'font-normal',
    'semi-bold': 'font-semibold',
    link: 'font-bold underline'
}

const TEXT_VALUE_DEFAULT = TEXT_VALUES.normal;


const ThemedText1 = ({
    className,
    type,
    ...rest
}: Props) => {
    // className='mt-20 text-3xl font-bold text-light-text dark:text-dark-text'
//    const marginTop = 'mt-20'
    const tipo = type ? TEXT_VALUES[type] : TEXT_VALUE_DEFAULT

  return (
     <Text
      className={[
        'text-light-text dark:text-dark-text',
        tipo,
        className
      ].join(' ')}
      {...rest}      
    /> 
  )
}

export default ThemedText1