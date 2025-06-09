
"use client";

import { useState, useEffect } from 'react';

export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Render empty or a placeholder until hydration to prevent mismatch
  return <>{year ?? ''}</>;
}
