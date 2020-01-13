import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient'

import commonStyles from '../../styles'

export const Background = styled(LinearGradient).attrs({
  colors: [commonStyles.colors.primary, commonStyles.colors.secundary]
})`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background: #FFF;
  color: #222;
  font-size: 17px;
  font-family: ${commonStyles.fontFamily};
  border-radius: 7px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${commonStyles.colors.button};
  height: 45px;
  width: 90%;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-family: ${commonStyles.fontFamily};
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignUpText = styled.Text`
  color: #FFF;
  padding-bottom: 13px;
  font-family: ${commonStyles.fontFamily};
`;
