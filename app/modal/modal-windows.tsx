import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'

const ModalScreen = () => {
  return (
    <ThemedView margin className='flex-1 justify-center items-center' bgColor='#A52182'>
      <ThemedText className=''>Hola soy un modal</ThemedText>
    </ThemedView>
  )
}

export default ModalScreen