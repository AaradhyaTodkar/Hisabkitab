import React from 'react';

const PageLayout = ({ pageTitle, headline, content }) => {
  return (
    <main className='container py-5'>
      <header className='mb-4 border-bottom pb-2'>
        <h1 className='display-5 fw-bold text-dark'>{pageTitle}</h1>
        {headline && <p className='lead text-muted'>{headline}</p>}
      </header>

      <section className='mb-5'>{content.dashboard}</section>

      <section className='mb-5'>
        <h2 className='h4 border-bottom pb-2 mb-3 text-secondary'>Log History</h2>
        {content.history}
      </section>

      <section className='bg-white p-4 rounded-3 shadow-sm border'>
        <h2 className='h4 mb-3 text-secondary'>Register New Entry</h2>
        {content.form}
      </section>
    </main>
  );
};

export default PageLayout;
