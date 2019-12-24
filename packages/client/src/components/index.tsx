import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Container from './container/Container'
import Navbar from './navbar/Navbar'
import Users from './users/Users'

const App: React.FC = () => {
  return (
    <Container>
      <Router history={createBrowserHistory()}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Users} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
