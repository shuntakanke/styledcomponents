import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';

const Title = styled.h1`
  color: red;
  font-size: 5rem;
`;

const App = () => {
  return (
    <div>
      <Title>My styled</Title>
      <Button>yooooooooo</Button>
    </div>
  );
};


export default App;