'use client';

import { useEffect } from 'react';

export default function CustodyDocsPage() {
  useEffect(() => {
    window.location.href = '/docs/custody/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Custody API Documentation...</p>
    </div>
  );
}
