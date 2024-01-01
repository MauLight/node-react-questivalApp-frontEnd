import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { UserCard } from '../components/allUsers/UserCard'

export const AllUsers = ({ users, myId }) => {

  const currentUser = users.filter(elem => elem.id === myId)
  console.log('THIS IS THE CURRENT USER: ', currentUser)

  const queryClient = useQueryClient()
  const followMutation = useMutation({
    mutationFn: (userToFollowId) => axios.put('http://localhost:3001/api/users', { userToFollowId, myId })
      .then(res => console.log(res)),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['allUsers'] })
  })

  const unfollowMutation = useMutation({
    mutationFn: (userToUnfollowId) => axios.post('http://localhost:3001/api/users/update', { userToUnfollowId, myId })
      .then(res => console.log(res)),

    onSuccess: () => queryClient.invalidateQueries('allUsers')
  })

  const handleFollow = (userToFollowId) => {
    followMutation.mutate(userToFollowId)
      .then(res => console.log(res))
  }

  const handleUnfollow = (userToUnfollowId) => {
    unfollowMutation.mutate(userToUnfollowId)
  }

  return (
    <div className='w-screen h-screen flex gap-x-5 justify-center items-center bg-[#181818]'>
      {
        users.map(user => (
          <UserCard key={user.id} user={user} myUser={currentUser[0]} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />
        ))
      }
    </div>
  )
}
