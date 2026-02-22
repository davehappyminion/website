'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectClient({ id }: { id: string }) {
  const router = useRouter();
  
  useEffect(() => {
    router.replace(`/minion-squad#${id}`);
  }, [id, router]);

  return null;
}
