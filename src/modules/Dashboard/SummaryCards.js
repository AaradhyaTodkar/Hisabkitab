import React, { useContext, useMemo } from 'react';
import { FinanceContext } from '../../store/FinanceContext';

const SummaryCards = () => {
  const { totalBudget, ledgerItems } = useContext(FinanceContext);

  const accumulatedExpenses = useMemo(() => {
    return ledgerItems.reduce((acc, curr) => acc + curr.amount, 0);
  }, [ledgerItems]);

  const leftoverFunds = totalBudget - accumulatedExpenses;
  const isOverBudget = accumulatedExpenses > totalBudget;

  return (
    <div className='row mt-3'>
      {/* Allocated Budget Card */}
      <div className='col-sm'>
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
          <span>Allocated Limit: £{totalBudget}</span>
        </div>
      </div>

      {/* Available Balance Card */}
      <div className='col-sm'>
        <div
          className={`alert ${
            isOverBudget ? 'alert-danger' : 'alert-success'
          } d-flex justify-content-between align-items-center`}
        >
          <span>Available Balance: £{leftoverFunds}</span>
        </div>
      </div>

      {/* Total Accrued Card */}
      <div className='col-sm'>
        <div className='alert alert-primary d-flex justify-content-between align-items-center'>
          <span>Accumulated Spending: £{accumulatedExpenses}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
