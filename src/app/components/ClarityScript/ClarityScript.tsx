'use client';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

const ClarityScript = () => {
  useEffect(() => {
    clarity.init('k27zkd7q7w');
  }, []);

  return null;
};

export default ClarityScript;
