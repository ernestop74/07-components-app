import { useThemeColor } from '@/hooks/use-theme-color';
import FadeInImages from '@/presentation/images/FadeInImages';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

interface ListItemProps {
  item: number;
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <FadeInImages
      uri={`https://picsum.photos/id/${ item }/500/400`}
      style={{ width: '100%', height: 400 }}
    />
/*     <Image
      source={{ uri: `https://picsum.photos/id/${ item }/500/400`}}
      style={{ width: '100%', height: 400 }}
    /> */
  );
};

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 9 }, (_, index) => numbers.length + index)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000);
    
  }

  return (
    <ThemedView>
      <FlatList 
        data={ numbers }
        renderItem={({ item }) => <ListItem item={ item } />}
        onEndReached={ loadMore }
        onEndReachedThreshold={0.3}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={ 40 } color={ primaryColor }/>
          </View>
        )}

        maxToRenderPerBatch={4}
        windowSize={7}
        initialNumToRender={4}
        removeClippedSubviews={true}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
