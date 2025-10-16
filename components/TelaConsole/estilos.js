import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  box: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titulo: {
    color: '#00A94F',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  paragrafo: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default estilos;
