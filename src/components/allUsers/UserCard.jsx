import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const placeholder = 'https://images.unsplash.com/photo-1649290098499-f4148542f2e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const UserCard = ({ user, myUser, handleFollow, handleUnfollow }) => {

  console.log(myUser.following)
  const [following, setFollowing] = useState(myUser.following.filter(elem => elem === user.id))
  const navigate = useNavigate()

  console.log(typeof myUser.id)
  console.log(following)

  useEffect(() => {
    setFollowing(myUser.following.filter(elem => elem.id === user.id))
  }, [user])

  return (
    <li className="w-[200px] flex flex-col rounded-2xl pb-5 overflow-hidden shadow-md bg-[#F2F3F4]" key={user.id}>
      <img src={user.avatar === '' ? placeholder : user.avatar} className="w-auto h-[400px] object-cover" />
      <div className="flex flex-col gap-y-2 mt-5 px-2 h-[250px]">
        <h1 onClick={() => navigate(`/user/${user.id}`)} className="font-body text-xl text-[#10100e] font-bold line-clamp-1 cursor-pointer">{user.firstname + user.lastname}</h1>
        <p className="text-[12px] text-[#9f9f9f] font-body">Followers:</p>
        <div className="flex flex-col gap-x-2">
          {
            user.followers.map(elem => (
              <p key={elem} className="text-[8px] text-[#9f9f9f] font-body">{elem.firstname + elem.lastname}</p>
            ))
          }
        </div>
        <p className="text-[12px] text-[#9f9f9f] font-body">Following:</p>
        <div className="flex flex-col gap-x-2">
          {
            user.following.map(elem => (
              <p key={elem} className="text-[8px] text-[#9f9f9f] font-body">{elem.firstname + elem.lastname}</p>
            ))
          }
        </div>
        <p className="text-[12px] text-[#9f9f9f] font-body">{`Email: ${user.email}`}</p>
        {
          following.length === 0 ? (
            <button onClick={() => {
              handleFollow(user.id)
            }
            } className='w-full rounded-full py-1 border mt-auto hover:bg-[#10100e] hover:text-[#e7e7e7] transition-color duration-200'>follow</button>
          )
            :
            (
              <button onClick={() => {
                handleUnfollow(user.id)
              }
              } className='w-full rounded-full py-1 border mt-auto hover:bg-[#10100e] hover:text-[#e7e7e7] transition-color duration-200'>unfollow</button>
            )
        }
      </div>
    </li>
  )
}
