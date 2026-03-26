import React, { useContext } from 'react';
import { FinanceContext } from '../../store/FinanceContext';
import TransactionRow from './TransactionRow';

const TransactionHistory = () => {
  const { ledgerItems } = useContext(FinanceContext);

  if (ledgerItems.length === 0) {
    return (
      <div className='alert alert-info text-center mt-3'>
        No recent transactions found. Create one below to track spending.
      </div>
    );
  }

  return (
    <ul className='list-group list-group-flush mt-3'>
      {ledgerItems.map((item) => (
        <TransactionRow
          key={item.id}
          transactionId={item.id}
          label={item.label}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default TransactionHistory;
