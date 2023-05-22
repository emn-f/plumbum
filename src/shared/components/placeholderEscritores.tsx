import React, { useState } from 'react';

const phEscritores: React.FC = () => {
  const initialNames = ['John', 'Jane', 'Mark', 'Alice'];
  const [names, setNames] = useState(initialNames);

  const randomName = names[Math.floor(Math.random() * names.length)];

  return <span>{randomName}</span>;
};

export default phEscritores;
