import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage.js';
import styled, { css } from 'styled-components';
import AppLayout from './AppLayout'


function App() {
  return (
    <AppLayout>
      <WelcomeMessage name={`CryptoDash`} />
    </AppLayout>

  );
}

export default App;
