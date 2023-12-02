import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { SIGNUP } from '../queries/loginQuery'
// import { useMutation } from '@apollo/client'
import { postUser } from '../services/user'

export const Signup = ({ setErrorMessage, setErrorType }) => {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const navigate = useNavigate()
  // const [signUp, result] = useMutation(SIGNUP, {
  //   onError: (error) => {
  //     setErrorType('error')
  //     setErrorMessage(error.graphQLErrors[0].message)
  //     setTimeout(() => setErrorMessage(null), 5000)
  //   }
  // })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (firstname === '' || lastname === '' || email === '' || birthdate === '' || password === '' || cpassword === '') {
      setErrorMessage('You have to fill all the inputs before submitting.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }
    if (password !== cpassword) {
      setErrorMessage('Passwords don\'t match.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const user = {
      firstname,
      lastname,
      email,
      birthdate,
      password
    }

    try {
      const postedUser = await postUser(user)
      console.log(postedUser)
      setErrorMessage(`A new hero was born, ${postedUser.firstname + ' ' + postedUser.lastname}!`)
      setErrorType('add')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      navigate('/login')
    }
    catch (error) {
      setErrorMessage('Email is already taken.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await signUp({ variables: { firstname, lastname, birthdate, email, password } })
  //   console.log(result.data.signUp)
  //   navigate('/login')
  //   setErrorType('add')
  //   setErrorMessage(`A new hero was born, ${result.data.signUp.firstname + ' ' + result.data.signUp.lastname}!`)
  //   setTimeout(() => {
  //     setErrorMessage(null)
  //   }, 5000)
  // }

  return (
    <div className='h-full max-sm:px-2 sm:w-full flex justify-center items-center'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col font-body text-sm items-center gap-y-5 py-10 px-5' >
          <div className="flex gap-x-2 w-full">
            <input type='text' className='glass h-12 p-2 font-body text-sm text-white bg-transparent w-full  rounded-md' value={firstname} onChange={({ target }) => setFirstName(target.value)} placeholder='Firstname' />
            <input type='text' className='glass h-12 p-2 text-white bg-transparent w-full font-body text-sm rounded-md' value={lastname} onChange={({ target }) => setLastName(target.value)} placeholder='Lastname' />
          </div>
          <div className="flex gap-y-2 w-full">
            <input type='text' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
          </div>
          <div className="flex gap-y-2 w-full">
            <input type='date' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={birthdate} onChange={({ target }) => setBirthdate(target.value)} placeholder='Birthdate' />
          </div>
          <div className="flex gap-x-2 w-full">
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={cpassword} onChange={({ target }) => setCpassword(target.value)} placeholder='Confirm Password' />
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</small>
          </div>
          <div className="flex gap-y-2 w-full">
            <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md' onClick={handleSubmit}>Sign up</button>
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>{'Already a member? '} <Link className='hover:text-[#464648] transition-color duration-200' to={'/login'}>Login.</Link></small>
          </div>
        </form>
      </div>
    </div>
  )
}
