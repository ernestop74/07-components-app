import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { FlatList, Image, ImageSourcePropType, useWindowDimensions } from 'react-native';


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {

  const { width, height} = useWindowDimensions();
  const { title, desc, img } = item;


  return (
    <ThemedView 
      className='flex-1 rounded p-10 justify-center bg-red-500'
      style={{ width }}
    >
      <Image 
        source={ img }
        style={{
          width: width * 0.7,
          height: height * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <ThemedText type='h1' className='text-light-primary dark:text-dark-primary'>
        { title }
      </ThemedText>

      <ThemedText className='mt-10'>{ desc }</ThemedText>      
    </ThemedView>
  );
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  return (
    <ThemedView margin>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={ ({ item }) => <SlideItem item={ item } />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <ThemedButton className='absolute bottom-10 right-5 w-[150]'> Siguiente </ThemedButton>
      <ThemedButton className='absolute bottom-10 right-5 w-[150]'> Finalizar </ThemedButton>
    </ThemedView>
    
  );
};
export default SlidesScreen;
