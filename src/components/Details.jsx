import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    const{char_id}=useParams()
    // console.log(char_id)
    useEffect(() => {
      try {
          const getUser=async()=>{
              const res=await axios.get("https://www.breakingbadapi.com/api/characters");
              setUser(res.data.find(el=>el.char_id==char_id))
          }
          getUser()
      } catch (error) {
          console.log(error)
      }
    }, [])
    
  return (
    <div>
       {
           user&& <div>
               <img src={user.img} alt="" />
               <h1> {user.name}</h1>
               <h2>{user.nickname}</h2>
               <h3>{user.birthday}</h3>
               
           </div>
       }
       <Link to="/"> <Button variant="warning">Home</Button>{' '}</Link>
    </div>
  )
}

export default Details