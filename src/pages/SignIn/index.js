import React, { useState } from "react";
import firebase from '../../services/firebaseConnection'

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  SignUpLink,
  SignUpText
} from "./styles";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.code))
    }
  }

  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/imgs/logo.png")} />

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
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Criar conta</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
