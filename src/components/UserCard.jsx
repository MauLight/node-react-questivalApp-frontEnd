// import { useLazyQuery } from '@apollo/client'
// import { GET_USER } from '../queries/userQueries'
import { useState } from 'react'
// import { Dna } from 'react-loader-spinner'


export const UserCard = ({ user }) => {

  const [isOpen, setIsOpen] = useState(false)
  // const [userData, setUserData] = useState(null)
  // const [loadUser, { called, loading, data }] = useLazyQuery(
  //   GET_USER,
  //   {
  //     variables: { email: user.email },
  //   }
  // )

  // const handleUser = () => {
  //   if (data) {
  //     setUserData(data.findUser)
  //   }
  //   else {
  //     console.log('Triggered!')
  //     loadUser()
  //   }
  // }

  // useEffect(() => {
  //   if (data) {
  //     setUserData(data.findUser)
  //   }
  // }, [data])

  // if (called && loading) {
  //   return <Dna height="130" width="160" color="black" wrapperStyle={{}} wrapperClass="dna-wrapper" />
  // }

  return (
    <>
      {
        !isOpen ? (
          <button key={user.email} onClick={() => setIsOpen(!isOpen)}>
            <h2 className='text-2xl font-body sm:text-4xl text-center text-white uppercase' >{user.firstname + ' ' + user.lastname}</h2>
          </button>
        )
          :
          (
            <div className='flex w-full'>
              <div className="flex flex-col">
                <h2 className='text-2xl font-body sm:text-4xl text-white uppercase'>{user.firstname + ' ' + user.lastname}</h2>
                <p className='text-xl font-body sm:text-2xl text-white uppercase'>{user.birthdate}</p>
                <p className='text-xl font-body sm:text-2xl text-white uppercase'>{user.email}</p>
              </div>
              <div className="flex flex-col w-full">
                <button onClick={() => setIsOpen(!isOpen)} className='ml-auto border border-white px-4 py-2 text-white rounded-md'>X</button>
                <div className='h-2/3'></div>
              </div>
            </div>
          )
      }
    </>
  )
}
