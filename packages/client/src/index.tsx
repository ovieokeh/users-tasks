import * as React from 'react'
import ReactDOM from 'react-dom'

import Users from './components/users/Users'

import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'

const App: React.FC = () => (
  <Container>
    <Navbar />
    <Users />
  </Container>
)

const rootNode = document.querySelector('#root')
ReactDOM.render(<App />, rootNode)

export default App
