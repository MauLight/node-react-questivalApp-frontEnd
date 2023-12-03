import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
// import { useMutation } from '@apollo/client'
// import { LOGIN } from '../queries/loginQuery'
import { logUser } from '../services/login'
import googleIcon from '../assets/googleIcon.svg'
import axios from 'axios'


export const Login = ({ setUser, setErrorMessage, setErrorType }) => {

  //! Google Only

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`, {
        hesders: {
          Authorization: `Bearer ${res.access_token}`,
          Accept: 'application/json'
        }
      })
        .then((res) => {
          console.log('This is the googleUser info:', res.data)
          handleGoogleSubmit(res.data)
        })
        .catch((error) => console.log(error))
    },
    onError: (error) => {
      setErrorType('error')
      setErrorMessage('Login failed:', error)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  })

  const [currentUser, setCurrentUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

  // const [login, result] = useMutation(LOGIN, {
  //   onError: (error) => {
  //     setErrorType('error')
  //     setErrorMessage(error.graphQLErrors[0].message)
  //     setTimeout(() => setErrorMessage(null), 5000)
  //   }
  // })

  const handleGoogleSubmit = async (profile) => {

    console.log('Profile email', profile.email)
    const user = {
      email: profile.email,
      password: profile.id
    }

    try {
      const loggedUser = await logUser(user)
      localStorage.setItem('QuestivalUser', JSON.stringify(loggedUser))
      setCurrentUser(loggedUser)
      setUser(loggedUser)
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
      setUser(loggedUser)
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

  // useEffect(() => {
  //   if (googleUser) {
  //     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
  //       hesders: {
  //         Authorization: `Bearer ${googleUser.access_token}`,
  //         Accept: 'application/json'
  //       }
  //     })
  //       .then((res) => {
  //         setProfile(res.data)
  //         console.log('This is the googleUser info:', res.data)
  //         handleSubmit()
  //       })
  //       .catch((error) => console.log(error))
  //   }
  // }, [googleUser])

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
          <div className="flex justify-center gap-y-2 w-full mt-2">
            <p className='text-md text-[#4D4D4D]'>OR</p>
          </div>
        </form>
        <div className='flex flex-col items-center gap-y-5 px-5 font-body text-sm min-w-[15vw]'>
          <div className="flex justify-center gap-y-2 w-full">
            <button className='glass h-12 p-2 text-white bg-transparent w-full rounded-md' onClick={googleLogin} >
              <div className="flex justify-center items-center gap-x-3">
                <img src={googleIcon} className='w-[30px] h-auto' />
                <h1 className='p-0 m-0'>Continue with Google</h1>
              </div>
            </button>
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>New to website? <Link className='hover:text-[#464648] transition-color duration-200' to={'/signup'}>Sign up.</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}