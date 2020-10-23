import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './global';

import light from './shared/theme/light';
import dark from './shared/theme/dark';
import usePersisteTheme from './shared/theme/usePersisteTheme';
import Favoritos from './pages/Favoritos';
import Livros from './pages/Livros';
import LivrosContainer from './LivrosContext';
import ToastContext from './ToastContext';
import Toast from './components/Toast';
import Footer from './components/Footer';



function App() {

  const [theme, setTheme] = usePersisteTheme<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }



  return (
    <ThemeProvider theme={theme}>
    <LivrosContainer>
        <ToastContext >

        <BrowserRouter>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Home />
            <Switch>
              <Route path="/" exact component={Livros} />
              <Route path="/favoritos"  component={Favoritos} />
            </Switch>
        </BrowserRouter>

        <Footer />
        <Toast />

        </ToastContext>
    </LivrosContainer>
    </ThemeProvider>

  );
}

export default App;