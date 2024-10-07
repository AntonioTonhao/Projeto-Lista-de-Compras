import React, { Component,useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList,Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';




    const lista =  [
      {id:'1', nome:'Ovo', idade:'R$50,00', Categoria:'Chocolate', image:require('./src/ovo.png')},
      {id:'2', nome:'Sal', idade:'R$40,00', Categoria: 'Bebidas', image:require('./src/sal.png')},
      {id:'3', nome:'Arroz', idade:'R$30,00', Categoria: 'Comidas', image:require('./src/arroz.png')},
      {id:'4', nome:'Feijao', idade:'R$20,00', Categoria:'Sal', image:require('./src/feijao.png')},
      {id:'5', nome:'H20', idade:'R$10,00', Categoria:'Sal', image:require('./src/H20.png')},
      {id:'6', nome:'Limão', idade:'R$35,00', Categoria:'Sal', image:require('./src/limao.png')},
      {id:'7', nome:'Sal', idade:'R$40,00', Categoria:'Sal', image:require('./src/sal.png')},
      {id:'8', nome:'Arroz', idade:'R$30,00', Categoria:'Sal', image:require('./src/arroz.png')},
      {id:'9', nome:'Feijao', idade:'R$20,00', Categoria:'Sal', image:require('./src/feijao.png')},
      {id:'10', nome:'H20', idade:'R$10,00', Categoria:'Sal', image:require('./src/H20.png')},
      {id:'11', nome:'Limão', idade:'R$35,00', Categoria:'Sal', image:require('./src/limao.png')},
      {id:'12', nome:'Sal', idade:'R$40,00', Categoria:'Sal', image:require('./src/sal.png')},
      {id:'13', nome:'Arroz', idade:'R$30,00', Categoria:'Sal', image:require('./src/arroz.png')},
      {id:'14', nome:'Feijao', idade:'R$20,00', Categoria:'Sal', image:require('./src/feijao.png')},
      {id:'15', nome:'H20', idade:'R$10,00', Categoria:'Sal', image:require('./src/H20.png')},
      {id:'16', nome:'Limão', idade:'R$35,00', Categoria:'Sal', image:require('./src/limao.png')},
    ]
  


  export default function App(){
  
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas as categorias");

    let produtosFiltrados;
    
    if (categoriaSelecionada === 'Todas as Categorias') {
      produtosFiltrados = lista;
    } else {
      produtosFiltrados = lista.filter(item => item.Categoria === categoriaSelecionada);
    }
  
  
  
  
    return (
    
    
    
    <View style={styles.container}>
    
    <View style={styles.view}>
      <Text style={styles.texto}>Mercado do Tonhão</Text>
      <Text>Preços fictícios</Text>
      <Image style={styles.imagem2} source={require('./src/icone.png')}></Image>
    </View>
   
    <View style={{ height: 50, alignContent: 'center' }}>
        <Picker
          selectedValue={categoriaSelecionada}
          onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)}
        >
          <Picker.Item label="Todas as Categorias" value="Todas as Categorias" />
          <Picker.Item label="Chocolate" value="Chocolate" />
          <Picker.Item label="Bebidas" value="Bebidas" />
          <Picker.Item label="Comidas" value="Comidas" />
          <Picker.Item label="Sal" value="Sal" />
        </Picker>
      </View>
    
    <FlatList
    data={produtosFiltrados}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => <View style={styles.areaProduto}>
    <View style={styles.view1}>
       {item.image && (
          <Image source={item.image} style={styles.imagem} />
        )}
        <Text style={styles.textoPessoa}>{item.nome}</Text>
        </View>

          <View style={styles.areaPreco}>
          <Text style={styles.textoPessoa}> Preço: </Text>
          <Text style={styles.textoPreco}>{item.idade}</Text>
        </View>
        </View>}
    />
    
    
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
   },
  areaProduto:{
    backgroundColor: '#32CD32',
    height:50,
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    margin:10,
    borderRadius:10,  
    
    
  },
  
  textoPessoa:{
    color:'black',
    fontSize:15,
    padding:3,
    
  },
  imagem:{
    width:30,
    height:30,
  },
  imagem2:{
    width:100,
    height:100, 
    marginLeft: 10,
    marginTop:10,
  },
  view1:{
    marginRight:50,
    marginLeft: 30,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  view2:{
    width:80,
    padding:3,
    alignItems:'center',
    justifyContent:'center'
  },
  texto:{
    fontSize:25,
    marginTop:10,
  },
  view:{
    
    height:200,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF2400',
  }
});


