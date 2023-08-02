'use client';

import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useMemo } from 'react';
import merge from 'deepmerge';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((errors) => {
      const { message, locations, path } = errors;
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
});
const httpLink = new HttpLink({
  uri: '',
  credentials: 'same-origin',
});

const createApolloClient = () => {
  const isSSR = typeof window === 'undefined';

  return new ApolloClient({
    ssrMode: isSSR,
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  });
};

type Apollo = ReturnType<typeof createApolloClient>;
let apolloClient: Apollo;

export const initializeApollo = (initialState = null): Apollo => {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (apolloClient !== null) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (initialState = null): Apollo => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
