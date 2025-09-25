import { StyleSheet, View, Image } from 'react-native';
import Titulo from '../components/Titulo';

export default function SemanaInclusao() {
  return (
    <View style={styles.container}>
      <Titulo texto={'Semana da Inclusão de Pessoa com Deficiência'} />
      <Image
        width={100}
        height={100}
        source={{
          url: '',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
