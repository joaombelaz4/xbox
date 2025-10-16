import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 20,
  },
  titulo: {
    color: '#00A94F',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descricao: {
    color: '#ddd',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
  },
  boxJogo: {
    marginBottom: 25,
  },
  card: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardTitulo: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },
  paragrafo: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
});

export default estilos;
