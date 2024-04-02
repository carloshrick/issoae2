import { StyleSheet } from "react-native";

export const estile = StyleSheet.create({

    divgeral : {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    },

    container : {
        marginTop: 28,
        flexDirection: 'row-reverse',
        height: 250,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#2F4550',
      
    },

    input_text: {
        width:230,
        height: 30,
        color: '#090B0A',
        fontSize:22,
        borderRadius: 100,
        backgroundColor: '#FFF',
        marginLeft:'20%',
        padding:5,
        marginTop:40
      },

    img_cabecalho: {
        height:120,
        width: 430,
        marginTop:'-15%',
        marginLeft:0,
        
    },
    
    icon: {
        height:20,
        width:20,
        marginLeft:0,
        marginTop:0
    },

    botao: {
        marginTop:-25,
        marginLeft:350,
        padding:5,
        width: 30,
        height:30,
        borderRadius: 10,
        fontSize: 50,
        backgroundColor: '#B8DBD9'
      },

    div: {
        marginTop:0,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#93B5C6',
        alignItems: 'center'
    },

    cards:{
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#F0CF65',
        height: 100,
        width: 380,
        borderRadius: 30
    },

    img_perfil:{
        height: 70,
        width:70,
        borderRadius: 80,
        marginLeft: 10
    },

    texto:{
        marginLeft:10,
        fontSize:22
    }

})