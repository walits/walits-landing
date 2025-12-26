'use client';

import { useEffect } from 'react';

export default function DocsPage() {
  useEffect(() => {
    window.location.href = '/docs/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to API Documentation...</p>
    </div>
  );
}
