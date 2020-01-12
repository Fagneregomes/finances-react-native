import React, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from '../../services/firebaseConnection'

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  SignUpText,
  SignInText,
  SignInButton,
} from "./styles";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  firebase.auth().signOut()

  async function handleSubmit() {
    if (name && password && email) {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async () => {
          let uid = firebase.auth().currentUser.uid
          await firebase.database().ref('users').child(uid).set({
            saldo: 0
          })
        })
        .catch((error) => {
          alert(error.code)
        })
    }
    else {
      alert('usuario vazio')
    }
  }

  return (
    <Background>
      <Container>
        <SignUpText>Quase tudo pronto <Icon name='grin-stars' solid size={30} /></SignUpText>

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(name) => {
              console.log(name)
              setName(name)
            }}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInButton>

      </Container>
    </Background>
  );
}
