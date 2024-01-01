import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { UserProfile } from './UserProfile'

export const OtherUserProfile = ({ userId, myUser, setUser }) => {

  // eslint-disable-next-line no-unused-vars
  const [following, setFollowing] = useState(myUser.following.find(elem => elem.id === userId))

  console.log('following?', userId)
  console.log('following?', myUser)

  const result = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => axios.get(`http://localhost:3001/api/users/${userId}`)
      .then(res => res.data)
  })

  // eslint-disable-next-line no-unused-vars
  const currentUserFetch = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => axios.get(`http://localhost:3001/api/users/${myUser.id}`)
      .then(res => setUser(res.data))
  })

  if (result.isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <InfinitySpin width="400" color="#F2F3F4" />
      </div>
    )
  }

  const user = result.data
  console.log('this is the user: ', user)

  return (
    <>
      <UserProfile myUser={myUser} user={user} myProfile={false} following={following} setFollowing={setFollowing} />
    </>
  )
}
