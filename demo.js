import AngularApollo from 'angular1-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

angular.module('app', [AngularApollo]).config(apolloProvider => {
  const client = new ApolloClient({
    link: HttpLink.create(...),
    cache: new InMemoryCache(...),
  });

  apolloProvider.defaultClient(client);
});