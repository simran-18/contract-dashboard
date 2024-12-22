import React, { createContext, useContext, useState } from "react";
import { contracts as mockContracts } from "../database/mockDb";

const AppContext = createContext();

export const ContractsProvider = ({ children }) => {
  const [contracts, setContracts] = useState(mockContracts);

  const updateContract = (updatedContract) => {
    setContracts((prev) =>
      prev?.map((contract) =>
        contract?.id === updatedContract?.id ? updatedContract : contract
      )
    );
  };

  return (
    <AppContext.Provider value={{ contracts, updateContract }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
