import '@/styles/globals.scss';
import '@/styles/layout.scss';

import AppLayout from '@/components/layout/layout';

export default function App({ Component, pageProps }) {
  const recentTitle = [
    {
      title: '1234'
    },
    {
      title: '4321'
    },
    {
      title: '1324'
    }
  ]

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
