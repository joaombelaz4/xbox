import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titulo: {
    color: '#00A94F',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: '#00A94F',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 14,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default estilos;
