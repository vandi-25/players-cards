import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Player from './Player'
import players from '../players'

function PlayersList() {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4">
      {players.map((player) => (
        <Col key={player.name}>
          <Player
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            image={player.image}
          />
        </Col>
      ))}
    </Row>
  )
}

export default PlayersList
