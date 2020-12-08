import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage.js';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage name={`CryptoDash`} />
      </AppProvider>
    </AppLayout>

  );
}

export default App;
