import React, { useState } from "react";

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

  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/logo.png")} />

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
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Criar conta</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
