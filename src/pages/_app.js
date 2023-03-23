import '@/styles/globals.scss';
import '@/styles/layout.scss';

import AppLayout from '@/components/layout/layout';

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
