import { createContext } from 'react';

export const UserContext = createContext({ user: null, username: null });

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = createContext(
  globalNavigationContext
);
