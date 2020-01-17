import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const BorderIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: 45;
  height: 45;
  border-radius: 100;
  border: 1px solid ${props => props.iconColor};
`;

export const BoxLeft = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

export const BoxRight = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContentLeft = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

export const ContentRight = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 0 0 10px;
`;

