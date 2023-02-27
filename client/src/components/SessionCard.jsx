import React from 'react'
// import { faClock, faCalendar, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const SessionCard = ({data}) => {

  return (
    <>
      <div className="max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden flex py-3 max-h-60 my-20 mx-20">
            <div className='flex-[2]'>

                <div className="py-4 px-2">
                    <h2 className="text-lg font-bold text-gray-800">{data.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{data.description}</p>
                    {/* <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
                            <span className="text-gray-600">{data.duration}</span>
                        </div>
                    </div> */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            {/* <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gray-400 mr-2" /> */}
                            <span className="text-gray-600">Jhon Doe</span>
                        </div>
                    </div>
              </div>
            </div>
            <div className='flex-1 '>

                <div className="flex items-center">
                    {/* <FontAwesomeIcon icon={faCalendar} className="text-gray-400 mr-2" /> */}
                    <span className="text-gray-600">{data.startDate}</span>
                </div>
                <div className="flex items-center">
                    {/* <FontAwesomeIcon icon={faCalendar} className="text-gray-400 mr-2" /> */}
                    <span className="text-gray-600">{data.endDate}</span>
                </div>
                <div className="flex items-center">
                    {/* <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-2" /> */}
                    <span className="text-gray-600">{data.medium}</span>
                </div>
                <div className="mt-4">
                    <span className="p-2 rounded-lg bg-blue-400 text-gray-800 text-sm font-medium">{data.language}</span>
                </div>
                <Link
                to={`/session-info/${data.id}`}
                >
                    <button className='bg-red-500 p-3 rounded-xl self-center text-white font-medium my-5 block text-center w-50 '>Read More</button>
                </Link>   
            </div>
        </div>
    </>
  )
}

export default SessionCard