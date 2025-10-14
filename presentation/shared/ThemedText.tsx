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


const ThemedText = ({
    className,
    type,
    children,
    ...rest
}: Props) => {
    // className='mt-20 text-3xl font-bold text-light-text dark:text-dark-text'
//    const marginTop = 'mt-20'
    const temaLigero = 'text-light-text'
    const temaOscuro = 'text-dark-text'
    const tipo = type ? TEXT_VALUES[type] : TEXT_VALUE_DEFAULT

  return (
    <Text
      className={[
        temaLigero,
        temaOscuro,
        tipo,
        className
      ].join(' ')}
      {...rest}      
    >
      { children }
    </Text>
  )
}

export default ThemedText