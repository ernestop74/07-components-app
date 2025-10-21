import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link asChild href="/modal/modal-windows" className='mx-4'>
        <Text className='text-light-text dark:text-dark-text my-2 text-xl'>Abrir Modal</Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
