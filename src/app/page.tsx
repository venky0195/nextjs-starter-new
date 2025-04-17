import Image from 'next/image';
import { getInitialVisibility } from '../lib/getInitialVisibility';
import dynamic from 'next/dynamic';

const PromoBanner = dynamic(() => import('@/components/PromoBanner'), {
  ssr: false,
});

export default async function Home() {
  const publishTime = '2024-04-17T00:00:00Z';
  const promoBannerType = 'default';
  const currentTitle = 'Super Promo!';

  const showBanner = await getInitialVisibility(
    publishTime,
    currentTitle,
    promoBannerType
  );

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {showBanner && (
        <PromoBanner
          type={promoBannerType}
          title={currentTitle}
          publishTime={publishTime}
        />
      )}
      {/* existing content... */}
    </main>
  );
}
