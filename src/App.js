import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FinanceProvider } from './store/FinanceContext';
import SummaryCards from './modules/Dashboard/SummaryCards';
import TransactionHistory from './modules/Transactions/TransactionHistory';
import RecordTransaction from './modules/Transactions/RecordTransaction';
import PageLayout from './modules/Layout/PageLayout';
import './App.css'; // Add minimal structural styling

const App = () => {
  return (
    <div className="finance-app-wrapper bg-light min-vh-100">
      <FinanceProvider>
        <PageLayout
          pageTitle="Personal Budget Planner"
          headline="Keep track of your monthly expenses effortlessly."
          content={{
            dashboard: <SummaryCards />,
            history: <TransactionHistory />,
            form: <RecordTransaction />
          }}
        />
      </FinanceProvider>
    </div>
  );
};

export default App;