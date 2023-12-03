import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image, ImageBackground, ScrollView} from 'react-native';

const MENSAGEM_EMAIL = "";
const MENSAGEM_SENHA = "";
const EMAIL = "";
const SENHA = "";

const ValidateLogin = async (email, senha, status, activity) => {
    if (email.trim().length === 0) {
        alert(MENSAGEM_EMAIL);
        return
    }

    if (senha.trim().length === 0) {
        alert(MENSAGEM_SENHA);
        return;
    }

    activity(true);

    let usuario = {
        "email": email,
        "password": senha
    };

    await fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(usuario)
    }).then(response => {
        if (response.status === 200) {
            response.text().then(function (result) {
                status("Usuário autenticado com sucesso.");
                console.log(result);
            });
        } else {
            status(`Usuário ou senha inválidos => código: ${response.status}`);
        }
        activity(false)
    }).catch(() => status("Não foi possivel executar o login."));
}

export default () => {
    const [user, setUser] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const [status, setStatus] = useState('')
    const [activity, setActivity] = useState(false)

    return (
        <View style={Estilos.container}>
            <ImageBackground source={require("./fundorose.jfif")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
              <Text style={Estilos.paragraph}>Meu Perfil</Text>
              <Image style={Estilos.logo} source={require('./avatar.png')}/>
              <Text style={Estilos.loginLabel}>Francisco Silva </Text>
              <Text style={Estilos.loginLabel}>40 anos </Text>
               <Text style={Estilos.loginLabel}>Mineiro</Text>
              <Text style={Estilos.loginLabel}>2 filhos </Text>
              <Text style={Estilos.loginLabel}>Adoro pães e bolos frescos e quentinhos!</Text>
              <Text style={Estilos.loginLabel}>O delivery com hora marcada facilita o meu dia-a-dia.</Text>
              <TextInput
                  
              />
              <Text style={Estilos.loginLabel}></Text>
              <TextInput
                  
              />
              <View style={Estilos.button}>
                <Button onPress={() => ValidateLogin(user, password, setStatus, setActivity)} title="Favoritos" color="#B8214C" />
                
              </View>
              <View style={Estilos.button}>
                <Button onPress={() => ValidateLogin(user, password, setStatus, setActivity)} title="Histórico" color="#B8214C" />
                
              </View>
              <View style={{marginTop: 10}}>
                  <ActivityIndicator size="large" animating={activity}/>
              </View>
              <Text style={Estilos.loginLabel}>{status}</Text>
            </ImageBackground>
        </View>
    )
};

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#202020'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginLabel: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        fontSize: 15,
        width: 120,
        height: 40,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
        alignSelf: 'center',
        color:'white',
    },

    logo: {
      width: 300,
      height: 200,
      alignSelf: 'center'
    },
    appImage: {
      flex: 3,
      justifyContent: "center",
      backgroundColor: 'rgb(160,82,45)'
    }
});
