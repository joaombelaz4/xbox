import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

// As imagens console-1.png e console-2.png não existem no diretório assets.
// Uso imagens existentes como fallback para evitar erro de 'module not found' no bundler web.
import imgConsole1 from '../../assets/xcloud-1.png';
import imgConsole2 from '../../assets/xcloud-2.png';
import estilos from './estilos';

export default function TelaConsole () {
  return (
    <ScrollView style={ estilos.container}>
      <View style={ estilos.box }>
        <Image source={ imgConsole1 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES S</Text>
        <Text style={ estilos.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance</Text>
      </View>

      <View style={ estilos.box }>
        <Image source={ imgConsole2 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES X</Text>
        <Text style={ estilos.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
      </View>
    </ScrollView>
  )
}