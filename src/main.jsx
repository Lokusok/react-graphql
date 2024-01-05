import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
