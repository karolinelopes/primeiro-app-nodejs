// cSpell:ignore Botao
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as Speech from 'expo-speech'

export default function App() {

    let frases = [
      "A definição de insanidade é fazer a mesma coisa repetidamente e esperar resultados diferentes.",
      "A imaginação é mais importante que o conhecimento.",
      "Só duas coisas são infinitas, o universo e a estupidez humana, mas não estou seguro sobre o primeiro.",
      "Viver é como andar de bicicleta: É preciso estar em constante movimento para manter o equilíbrio.",
      "Imaginação é tudo, é a prévia das atrações futuras.",
      "No meio da dificuldade encontra-se a oportunidade.",
      "Olhe profundamente a Natureza e então você entenderá tudo melhor.",
      "Não tenho nenhum talento especial. Apenas sou apaixonadamente curioso."
    ]

    function falar() {
      var frase = frases[parseInt(Math.random() * frases.length)]
      Speech.speak(frase, { language: 'pt' })
    }

    function parar() {
      Speech.stop()
    }

  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name='comment' size={50} />{" "}Fala Einstein!</Text>
      <Image style={styles.Imagem} source={require('./assets/einstein.png')} />

      <FontAwesome.Button
        name="volume-up"
        backgroundColor='#0275d8'
        style={styles.Botao}
        onPress={falar}>
        Ouvir a frase
    </FontAwesome.Button>

    <FontAwesome.Button
      name="stop-circle"
      backgroundColor='#d9534f'
      style={styles.Botao}
      onPress={parar}>
      Parar
</FontAwesome.Button>

</SafeAreaView >
  )
}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Titulo: {
    fontSize: 30,
    color: '#1a237e', /* azul indigo */
  },
  Imagem: {
    height: 400,
    resizeMode: 'center'
  },
  Botao: {
    height: 50,
    borderRadius: 15
  }
})
