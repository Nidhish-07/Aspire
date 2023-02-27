import React from 'react'
import SessionCard from '../components/SessionCard'
import sessionsDB from '../data'


const Sessions = () => {
  
  // console.log(sessionsDB);

  return (
    <>
      <main>
        <ul>
          {sessionsDB.map((session) => (
            <li key={session.id}>
              <SessionCard id={session.id} data={session}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Sessions