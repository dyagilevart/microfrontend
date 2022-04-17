import { useState } from 'react';

const Demonstration = () => {
  const [state, setState] = useState('Initial state');

  return <div>state is {state}</div>;
};

export default Demonstration;