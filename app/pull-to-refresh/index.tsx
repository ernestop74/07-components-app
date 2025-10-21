import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor({
    dark: 'black', light: 'white'
  }, 'background')

  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={ isRefreshing }
          onRefresh={onRefresh}
          colors={[ primaryColor, 'red', 'yellow', 'green' ]}
          progressBackgroundColor={ backgroundColor }
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
