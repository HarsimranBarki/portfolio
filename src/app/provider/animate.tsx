'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

export default function AnimateWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Force remount on path change */}

      <div key={pathname}> {children}</div>
    </AnimatePresence>
  );
}
