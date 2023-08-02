import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@/utils/apis/apollo';
import MSWSwitch from '@/components/common/MSWSwitch';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <MSWSwitch />
    </ApolloProvider>
  );
}
