import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c2e2d',
    padding: 15,
    },

    img: {
      width: 80,
      height: 80,
      borderRadius: 100,
      marginBottom: 10,
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#107c0f',
        marginBottom: 5,
    },

    descricao: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },

    card: {
      backgroundColor: '#3b3e3d',
      borderRadius: 10,
      padding: 15,
    },

    cardTexto: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});

export default estilos;
