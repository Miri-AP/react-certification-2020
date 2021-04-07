import React from 'react';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section data-testid="not-found" className="not-found">
      <a to="/" className="home-link">
        home
      </a>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
