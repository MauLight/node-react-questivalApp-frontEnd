import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
// import { SIGNUP } from '../queries/loginQuery'
// import { useMutation } from '@apollo/client'
import { postUser } from '../services/user'
import { logUser } from '../services/login'

//* Components
import { Form } from '../components/signup/Form'
import { GoogleUserSign } from '../components/signup/GoogleUserSign'

export const Signup = ({ setUser, setErrorMessage, setErrorType }) => {

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
          // eslint-disable-next-line no-unused-vars
        })
        .catch((error) => console.log(error))
    },
    onError: (error) => {
      setErrorType('error')
      setErrorMessage('Login failed:', error)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  })

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
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

  const handleGoogleSubmit = async (profile) => {

    const user = {
      firstname: profile.given_name,
      lastname: profile.family_name,
      email: profile.email,
      password: profile.id,
      avatar: profile.picture
    }

    try {
      const postedUser = await postUser(user)
      console.log(postedUser)
      setErrorMessage(`A new hero was born, ${postedUser.firstname + ' ' + postedUser.lastname}!`)
      setErrorType('add')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      handleGoogleLogin({ email: profile.email, id: profile.id })
      return postedUser
    }
    catch (error) {
      setErrorMessage('Email is already taken.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  const handleSubmit = async (e) => {

    e.preventDefault()
    if (firstname === '' || lastname === '' || email === '' || password === '' || cpassword === '') {
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

  const handleGoogleLogin = async (profile) => {

    console.log('Profile email', profile.email)
    const user = {
      email: profile.email,
      password: profile.id
    }

    try {
      const loggedUser = await logUser(user)
      localStorage.setItem('QuestivalUser', JSON.stringify(loggedUser))
      setUser(loggedUser)
      console.log('This is the logged user', loggedUser)
      navigate('/profile')
      return loggedUser
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
    <div className='h-screen max-sm:px-2 sm:w-full w-[20vw] z-40'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex flex-col w-full items-start gap-y-0 pb-5 px-5 font-body'>
          <h1 className='text-2xl text-start w-full text-white font-bold font-body p-0 m-0'>{'Join Questival!'}</h1>
          <p className='text-sm text-white p-0 m-0'>Just some details to let you in.</p>
        </div>

        <Form
          firstname={firstname}
          setFirstName={setFirstName}
          lastname={lastname}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          cpassword={cpassword}
          setCpassword={setCpassword}
          handleSubmit={handleSubmit}
        />

        <div className='flex flex-col items-center gap-y-5 px-5 font-body text-sm w-full'>
          <GoogleUserSign googleLogin={googleLogin} />
          <div className="flex gap-y-2 mt-auto">
            <small className='text-white'>{'Already a member? '} <Link className='hover:text-[#FC4ECF] transition-color duration-200' to={'/login'}>Login.</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}
