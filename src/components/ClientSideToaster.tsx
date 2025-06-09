
"use client";

import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";

export default function ClientSideToaster() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render Toaster only on the client after mount
  return isClient ? <Toaster /> : null;
}
