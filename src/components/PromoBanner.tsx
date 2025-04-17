'use client';

import { useEffect, useState } from 'react';

type Props = {
  type?: string;
  title?: string;
  publishTime: string;
};

export default function PromoBanner({
  type = 'default',
  title = '',
  publishTime,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      const existing = document.cookie
        .split('; ')
        .find((row) => row.startsWith('promo_banner='))
        ?.split('=')[1];

      let parsed: any = {};
      try {
        if (existing) {
          parsed = JSON.parse(decodeURIComponent(existing));
        }
      } catch (_) {}

      parsed[type] = {
        dismissed: true,
        storedPublishTime: publishTime,
        title,
      };

      document.cookie = `promo_banner=${encodeURIComponent(
        JSON.stringify(parsed)
      )}; path=/; max-age=31536000`;
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className='bg-blue-600 text-white px-4 py-3 flex justify-between items-center'>
      <p className='text-sm font-medium'>🎉 Limited Time Offer: {title}</p>
      <button
        onClick={() => setVisible(false)}
        className='ml-4 text-white hover:underline text-sm'
      >
        Dismiss
      </button>
    </div>
  );
}
