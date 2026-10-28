import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

// Default props: React 19 no longer supports Player.defaultProps on function
// components, so each attribute gets its default value while destructuring.
function Player({
  name = 'Unknown Player',
  team = 'Free Agent',
  nationality = 'Unknown',
  jerseyNumber = 0,
  age = 'N/A',
  image = '/players/default.svg',
}) {
  return (
    <Card
      className="h-100 player-card"
      style={{
        border: 'none',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
      }}
    >
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(circle at 50% 30%, #2f8f4e 0%, #14532d 75%)',
          padding: '24px',
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          alt={`${name} jersey`}
          style={{ height: '200px', objectFit: 'contain', filter: 'drop-shadow(0 8px 10px rgba(0, 0, 0, 0.4))' }}
        />
        <Badge
          bg="light"
          text="dark"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            fontSize: '1.1rem',
            borderRadius: '12px',
            padding: '8px 12px',
          }}
        >
          #{jerseyNumber}
        </Badge>
      </div>

      <Card.Body style={{ paddingBottom: '8px' }}>
        <Card.Title style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: '2px' }}>{name}</Card.Title>
        <Card.Subtitle style={{ color: '#2f8f4e', fontWeight: 600 }}>{team}</Card.Subtitle>
      </Card.Body>

      <ListGroup variant="flush">
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#6c757d' }}>Nationality</span>
          <strong>{nationality}</strong>
        </ListGroup.Item>
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#6c757d' }}>Jersey number</span>
          <strong>{jerseyNumber}</strong>
        </ListGroup.Item>
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#6c757d' }}>Age</span>
          <strong>{age}</strong>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Player
