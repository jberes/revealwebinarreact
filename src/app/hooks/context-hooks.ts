import { createContext, Dispatch, useContext, useState } from 'react';

export const GlobalContext = createContext<{globalState: GlobalStateInterface, setGlobalState: Dispatch<React.SetStateAction<GlobalStateInterface>>}>(undefined as any);
export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalState = () => {
  const initialState = {
    revealServer: 'https://localhost:7218'
  } as GlobalStateInterface;

  const [globalState, setGlobalState] = useState<GlobalStateInterface>(initialState);

  return { globalState, setGlobalState };
};

interface GlobalStateInterface {
  revealServer: string;
}
