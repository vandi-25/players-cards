import Container from 'react-bootstrap/Container'
import PlayersList from './components/PlayersList'

function App() {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <p className="kicker">Matchday Squad</p>
        <h1 className="title">Football Stars</h1>
      </header>
      <PlayersList />
    </Container>
  )
}

export default App
