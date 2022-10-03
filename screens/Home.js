import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Button title="Cadastrar Consumidor" onPress={() => navigation.navigate('CadastroConsumidor')}></Button>
      <Button title="Cadastrar Nota" onPress={() => navigation.navigate('CadastroNotaFiscal')}></Button>
      <Button title="Listar" onPress={() => navigation.navigate('Listagem')}></Button>
    </View>
  )
}

export default Home;