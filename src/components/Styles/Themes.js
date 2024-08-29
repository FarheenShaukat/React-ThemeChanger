import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components' 

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: 'Arial', sans-serif;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  border: none;
  cursor: pointer;
`;
export const lightTheme={
    background: '#ffffff',
    color: '#000000',
}

export const darkTheme = {
    background: '#000000',
    color: '#ffffff',
  };