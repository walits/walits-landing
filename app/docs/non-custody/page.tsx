'use client';

import { useEffect } from 'react';

export default function NonCustodyDocsPage() {
  useEffect(() => {
    window.location.href = '/docs/non-custody/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Non-Custody API Documentation...</p>
    </div>
  );
}
