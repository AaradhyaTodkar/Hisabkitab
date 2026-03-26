import React, { useContext, useCallback } from 'react';
import { FinanceContext, ACTION_TYPES } from '../../store/FinanceContext';
import { TiDelete } from 'react-icons/ti';

const TransactionRow = ({ transactionId, label, amount }) => {
  const { storeDispatch } = useContext(FinanceContext);

  const removeEntry = useCallback(() => {
    storeDispatch({
      type: ACTION_TYPES.REMOVE_EXPENSE,
      payload: transactionId,
    });
  }, [storeDispatch, transactionId]);

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded border'>
      <span className='fw-bold'>{label}</span>
      <div className='d-flex align-items-center gap-3'>
        <span className='badge badge-primary badge-pill fs-6 px-3 py-2'>
          £{amount}
        </span>
        <button
          className='btn btn-link text-danger p-0'
          onClick={removeEntry}
          aria-label='Delete transaction'
        >
          <TiDelete size='1.8em' />
        </button>
      </div>
    </li>
  );
};

export default React.memo(TransactionRow);
