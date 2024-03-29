import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
// import { useMutation } from '@apollo/client'
// import { LOGIN } from '../queries/loginQuery'
import { logUser } from '../services/login'

//* Components
import { LoginForm } from '../components/login/LoginForm'
import { GoogleUserLogin } from '../components/login/GoogleUserLogin'


export const Login = ({ setUser, setErrorMessage, setErrorType }) => {

  //! Google Only

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`, {
        headers: {
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
      navigate('/profile')
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
      navigate('/profile')
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
    <div className='h-screen max-sm:px-2 w-screen flex justify-center items-center'>
      <div className='w-[28%]'>
        <div className='flex flex-col items-start gap-y-0 pb-5 px-5 font-body'>
          <h1 className='text-2xl text-white font-bold font-body p-0 m-0'>{'Glad you\'re back!'}</h1>
          <p className='text-sm text-white p-0 m-0'>Enter email to continue.</p>
        </div>
        <LoginForm email={setEmail} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} />
        <div className='flex flex-col items-center gap-y-5 px-5 font-body text-sm'>
          <GoogleUserLogin googleLogin={googleLogin} />
          <div className="flex gap-y-2">
            <small className='text-white'>New to website? <Link className='hover:text-[#FC4ECF] transition-color duration-200' to={'/signup'}>Sign up.</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}