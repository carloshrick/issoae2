    import { View,  TextInput, TouchableOpacity, Button, Image, Text } from "react-native"
    import {estile} from './style'  

    export default function Card({name}){
        return(
        <View style={estile.divgeral}>
            <View style={estile.container}>
                <View>
                    <Image style={estile.img_cabecalho}source={require('../../assets/banner.jpg')}/>
                    <TextInput style  = {estile.input_text}/>
                    <TouchableOpacity style={estile.botao}>
                        <Image style={estile.icon}source={require('../../assets/iconepesquisa.png')}/>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={estile.div}>
                        <View style={estile.cards}><Image style={estile.img_perfil}source={require('../../assets/batman.jpg')}/>
                            <Text style={estile.texto}>TEXTO</Text>
                        </View>
                        <View style={estile.cards}><Image style={estile.img_perfil}source={require('../../assets/batman.jpg')}/>
                            <Text style={estile.texto}>TEXTO</Text>
                        </View>
                        <View style={estile.cards}><Image style={estile.img_perfil}source={require('../../assets/batman.jpg')}/>
                            <Text style={estile.texto}>TEXTO</Text>
                        </View>
                        <View style={estile.cards}><Image style={estile.img_perfil}source={require('../../assets/batman.jpg')}/>
                            <Text style={estile.texto}>TEXTO</Text>
                        </View><View style={estile.cards}><Image style={estile.img_perfil}source={require('../../assets/batman.jpg')}/>
                            <Text style={estile.texto}>TEXTO</Text>
                        </View>

                    </View> 
            
        </View>
            
        )
    }