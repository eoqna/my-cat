import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import Navigations from './navigation/Navigations';

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
