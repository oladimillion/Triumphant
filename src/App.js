import React from 'react';
import styled from 'styled-components'
import { Routes } from './Routes'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

const AppWrapper = styled.div``

function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}

export default App;
