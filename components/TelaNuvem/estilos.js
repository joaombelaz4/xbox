import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    paddingHorizontal: 20,
  },
  titulo: {
    color: '#00A94F',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  paragrafo: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  img: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default estilos;
