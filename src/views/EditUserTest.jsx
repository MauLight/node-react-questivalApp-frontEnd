import { useState } from 'react'
// import { useMutation } from '@apollo/client'
// import { ALL_USERS, EDIT_USER } from '../queries/userQueries'
import { Link, useNavigate } from 'react-router-dom'
import { updateUser } from '../services/user'

export const EditUserTest = ({ setErrorMessage, setErrorType }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('QuestivalUser')))
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  //! GraphQL method
  // const [editUser] = useMutation(EDIT_USER, {
  //   refetchQueries: [{ query: ALL_USERS }],
  //   onError: (error) => {
  //     const messages = error.graphQLErrors.map(e => e.message).join('\n')
  //     setErrorMessage(messages)
  //     setTimeout(() => setErrorMessage(null), 5000)
  //   }
  // })

  // const handleSubmit = (e) => {

  //   e.preventDefault()

  //   if (firstname === '' || lastname === '' || email === '') {
  //     setErrorType('error')
  //     setErrorMessage('Please fill all the information before submitting.')
  //     setTimeout(() => setErrorMessage(null), 5000)
  //     return
  //   }

  //   editUser({
  //     variables: {
  //       firstname,
  //       lastname,
  //       birthdate: String(birthdate),
  //       email
  //     }
  //   })

  // }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (firstname === '' || lastname === '' || email === '') {
      setErrorType('error')
      setErrorMessage('Please fill all the information before submitting.')
      setTimeout(() => setErrorMessage(null), 5000)
      return
    }

    const updateObj = {
      firstname,
      lastname,
      birthdate,
      email
    }

    try {
      const updatedUser = await updateUser(user.id, updateObj)
      console.log(updatedUser)
      setUser(updatedUser)
      localStorage.setItem('QuestivalUser', JSON.stringify(updatedUser))
      navigate('/dashboard')
      setErrorType('add')
      setErrorMessage('User updated succesfully!')
      setTimeout(() => setErrorMessage(null), 5000)
    }
    catch (error) {
      console.log(error)
      setErrorType('error')
      setErrorMessage(error)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <div>
      <form className='flex flex-col items-center gap-y-5 py-10 px-5 font-body text-sm min-w-[15vw]' onSubmit={handleSubmit}>
        <input className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' type="text" placeholder={String(user.firstname)} value={firstname} onChange={({ target }) => setFirstName(target.value)} />
        <input className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' type="text" placeholder={String(user.lastname)} value={lastname} onChange={({ target }) => setLastname(target.value)} />
        <input className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' type="date" placeholder={''} value={birthdate} onChange={({ target }) => setBirthdate(target.value)} />
        <input className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' type="text" placeholder={String(user.email)} value={email} onChange={({ target }) => setEmail(target.value)} />
        <div className="flex gap-y-2 w-full">
          <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md' onClick={handleSubmit}>Update Info</button>
        </div>
        <div className="flex gap-y-2">
          <small className='text-white'><Link className='hover:text-[#464648] transition-color duration-200' to={'/dashboard'}>Cancel?</Link></small>
        </div>
      </form>
    </div>
  )
}
