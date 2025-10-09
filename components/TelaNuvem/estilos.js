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
    }
});

export default estilos;
