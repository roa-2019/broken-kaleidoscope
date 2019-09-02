import React from 'react';
import Pixel from './Pixel';

const App = () => {
  return Array.from({ length: 30000}, () => <Pixel />);
};

export default App;
