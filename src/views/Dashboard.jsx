import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useQuery } from '@apollo/client'
// import { ALL_USERS } from '../queries/userQueries'

import { Edit } from '@carbon/icons-react'
// import { Dna } from 'react-loader-spinner'
// import { UserCard } from '../components/UserCard'

export const Dashboard = () => {

  const [currentUser, setCurrentUser] = useState(null)
  // const { loading, data, error } = useQuery(ALL_USERS)

  const navigate = useNavigate()

  useEffect(() => {
    // console.log(data)
    const user = localStorage.getItem('QuestivalUser')
    console.log(JSON.parse(user))
    setCurrentUser(JSON.parse(user))
    if (!user) {
      navigate('/signup')
    }
  }, [])

  // if (loading) {
  //   return <Dna height="100" width="120" color="black" wrapperStyle={{}} wrapperClass="dna-wrapper" />
  // }

  // if (error) {
  //   console.log(error.message)
  // }

  return (
    <>
      <div className="flex gap-x-2">
        <h1 className='text-4xl font-body sm:text-6xl text-center text-white uppercase'>{`welcome ${currentUser?.firstname} ${currentUser?.lastname}!`}</h1>
        <button onClick={() => navigate('/editUser')}>
          <Edit size={36} className='text-4xl sm:text-6xl text-white' />
        </button>
      </div>
    </>
  )
}

