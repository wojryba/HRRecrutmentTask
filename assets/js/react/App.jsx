import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import List from "./routes/list.jsx";
import CreateForm from "./routes/create.jsx";
import EditForm from "./routes/edit.jsx";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router basename="/notes">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/create" component={CreateForm} />
          <Route path="/edit/:id" component={EditForm} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;
