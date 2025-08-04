'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { useComputedColorScheme } from '@mantine/core';

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  return (
    <ProgressProvider
      height="4px"
      color={computedColorScheme === 'dark' ? '#00f0ff' : '#1f2d4a'}
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBarProvider;
