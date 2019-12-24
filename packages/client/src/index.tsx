import * as React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './views/Home'

import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'

const App: React.FC = () => {
  return (
    <Container>
      <Router history={createBrowserHistory()}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App

const rootNode = document.querySelector('#root')

ReactDOM.render(<App />, rootNode)
