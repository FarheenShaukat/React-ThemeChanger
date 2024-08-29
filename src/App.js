import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Container, Button, lightTheme, darkTheme } from './components/Styles/Themes'

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Theme Switcher</h1>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
