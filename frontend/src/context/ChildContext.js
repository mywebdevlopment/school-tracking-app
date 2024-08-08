// src/context/ChildContext.js
import React, { createContext, useState } from 'react';

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
  const [childrenData, setChildrenData] = useState([]);

  return (
    <ChildContext.Provider value={{ childrenData, setChildrenData }}>
      {children}
    </ChildContext.Provider>
  );
};
