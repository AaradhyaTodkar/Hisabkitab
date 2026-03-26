import React, { createContext, useReducer, useMemo } from 'react';

const ACTION_TYPES = {
  CREATE_EXPENSE: 'CREATE_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

const initialData = {
  totalBudget: 2000,
  ledgerItems: [
    { id: 12, label: 'shopping', amount: 40 },
    { id: 13, label: 'holiday', amount: 400 },
    { id: 14, label: 'car service', amount: 50 },
  ],
};

const ledgerReducer = (currentState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_EXPENSE:
      return {
        ...currentState,
        ledgerItems: [...currentState.ledgerItems, action.payload],
      };
    case ACTION_TYPES.REMOVE_EXPENSE:
      return {
        ...currentState,
        ledgerItems: currentState.ledgerItems.filter(
          (entry) => entry.id !== action.payload
        ),
      };
    default:
      return currentState;
  }
};

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [storeState, storeDispatch] = useReducer(ledgerReducer, initialData);

  const contextValue = useMemo(() => ({
    totalBudget: storeState.totalBudget,
    ledgerItems: storeState.ledgerItems,
    storeDispatch,
  }), [storeState]);

  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  );
};

export { ACTION_TYPES };
