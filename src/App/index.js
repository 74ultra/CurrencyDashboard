import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage.js';
import styled, { css } from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';


function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage name={`CryptoDash`} />
    </AppLayout>

  );
}

export default App;
