import React, { useContext, useState } from 'react';
import { v4 as makeUUID } from 'uuid';
import { FinanceContext, ACTION_TYPES } from '../../store/FinanceContext';

const RecordTransaction = () => {
  const { storeDispatch } = useContext(FinanceContext);

  const [transactionLabel, setTransactionLabel] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!transactionLabel || !transactionAmount) return;

    const entryConfig = {
      id: makeUUID(),
      label: transactionLabel.trim(),
      amount: parseInt(transactionAmount, 10),
    };

    storeDispatch({
      type: ACTION_TYPES.CREATE_EXPENSE,
      payload: entryConfig,
    });

    setTransactionLabel('');
    setTransactionAmount('');
  };

  return (
    <form className='mt-3 bg-light p-4 rounded shadow-sm' onSubmit={handleSubmission}>
      <div className='row'>
        <div className='col-md-5 mb-3'>
          <label htmlFor='transaction-label' className='form-label fw-bold'>
            Item Label
          </label>
          <input
            id='transaction-label'
            className='form-control form-control-lg'
            type='text'
            placeholder='e.g., Groceries'
            value={transactionLabel}
            onChange={(e) => setTransactionLabel(e.target.value)}
            required
          />
        </div>
        
        <div className='col-md-5 mb-3'>
          <label htmlFor='transaction-amount' className='form-label fw-bold'>
            Cost Amount (£)
          </label>
          <input
            id='transaction-amount'
            className='form-control form-control-lg'
            type='number'
            placeholder='e.g., 50'
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            required
            min='1'
          />
        </div>

        <div className='col-md-2 d-flex align-items-end mb-3'>
          <button
            type='submit'
            className='btn btn-primary btn-lg w-100'
          >
            Add Record
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecordTransaction;
