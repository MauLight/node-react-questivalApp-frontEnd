import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import './index.css'

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('QuestivalUser'))
  console.log('this is the token', JSON.parse(token))
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token.token}` : null,
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

//! Create a new Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ApolloProvider client={client}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
        <App />
      </GoogleOAuthProvider>
    </ApolloProvider>
  </Router>
)
