import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div className='movie-card'>
        <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <img src={user.img} alt="" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    {user.nickname}
    </Card.Text>
    <p>{user.birthday}</p>
    <Link to={`/info/${user.char_id}`}> <Button variant="primary">Info</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard