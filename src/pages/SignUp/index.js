import React, { useState } from "react";

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

  return (
    <Background>
      <Container>
        <SignUpText>Quase tudo pronto :)</SignUpText>

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChange={text => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChange={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChange={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={() => { }}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInButton>

      </Container>
    </Background>
  );
}
