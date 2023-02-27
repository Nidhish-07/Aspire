import React from 'react'
import { useParams } from 'react-router-dom'
import sessionsDB from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const SessionInfo = () => {

    const params = useParams();
    let session;


    sessionsDB.map((e) => {
      if(params.id == e.id) {
        session = e;
        return;
      }
    })

  console.log(session);
    
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{session.title}</h1>
        <p className="mt-2 text-lg text-gray-600">{session.description}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">Session Dates:</p>
        <p className="text-lg text-gray-900">{session.startDate} - {session.endDate}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">Recommended:</p>
        {session.recommended ? (
          <p className="flex items-center text-green-500"><FontAwesomeIcon icon={faCheck} className="mr-2" />Yes</p>
        ) : (
          <p className="flex items-center text-red-500"><FontAwesomeIcon icon={faTimes} className="mr-2" />No</p>
        )}
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">Categories:</p>
        <ul className="list-disc list-inside">
          {session.categories.map(category => (
            <li key={category} className="text-lg text-gray-900">{category}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">Medium:</p>
        <p className="text-lg text-gray-900">{session.medium}</p>
      </div>

      <div>
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">Language:</p>
        <p className="text-lg text-gray-900">{session.language}</p>
      </div>
    </div>
  )
}

export default SessionInfo