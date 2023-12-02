import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useMutation } from '@apollo/client'
// import { LOGIN } from '../queries/loginQuery'
import { logUser } from '../services/login'


export const Login = ({ setErrorMessage, setErrorType }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // const [login, result] = useMutation(LOGIN, {
  //   onError: (error) => {
  //     setErrorType('error')
  //     setErrorMessage(error.graphQLErrors[0].message)
  //     setTimeout(() => setErrorMessage(null), 5000)
  //   }
  // })

  //! REST version
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setErrorMessage('You have to fill all the inputs before submitting.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const user = {
      email,
      password
    }

    try {
      const loggedUser = await logUser(user)
      localStorage.setItem('QuestivalUser', JSON.stringify(loggedUser))
      setCurrentUser(loggedUser)
      setEmail('')
      setPassword('')
      console.log('This is the logged user', currentUser)
      navigate('/dashboard')
    }
    catch (error) {
      console.log(error)
      setErrorMessage('Incorrect password or email.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  //! graphQL version
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   login({ variables: { email, password } })
  // }

  // useEffect(() => {
  //   if (result.data) {
  //     const currentUser = result.data.login
  //     setUser(currentUser)
  //     localStorage.setItem('QuestivalUser', JSON.stringify(currentUser))
  //     console.log('This is the logged user', currentUser)
  //     navigate('/dashboard')
  //   }
  // })

  return (
    <div className='h-full max-sm:px-2 sm:w-full flex justify-center items-center'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 py-10 px-5 font-body text-sm min-w-[15vw]' >
          <div className="flex gap-y-2 w-full">
            <input type='text' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
          </div>
          <div className="flex flex-col gap-x-2 w-full">
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
            <Link className='pt-1' to={'/passwordResetRequest'}><small className='text-white pl-2 pt-2'>Forgot your password?</small></Link>
          </div>
          <div className="flex gap-y-2 w-full">
            <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md' onClick={handleSubmit}>Login</button>
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>New to website? <Link className='hover:text-[#464648] transition-color duration-200' to={'/signup'}>Sign up.</Link></small>
          </div>
        </form>
      </div>
    </div>
  )
}