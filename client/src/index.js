import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'

ReactDOM.render(
  <HashRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </HashRouter>,
  document.getElementById('root')
);


