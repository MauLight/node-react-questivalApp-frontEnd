import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
// import { SIGNUP } from '../queries/loginQuery'
// import { useMutation } from '@apollo/client'
import { postUser } from '../services/user'
import googleIcon from '../assets/googleIcon.svg'
import { logUser } from '../services/login'

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
            .then(response => {
              handleGoogleLogin(res.data)
            })
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

  const handleGoogleSubmit = async (profile) => {

    const user = {
      firstname: profile.given_name,
      lastname: profile.family_name,
      birthdate: Date.now(),
      email: profile.email,
      password: profile.id
    }

    try {
      const postedUser = await postUser(user)
      console.log(postedUser)
      setErrorMessage(`A new hero was born, ${postedUser.firstname + ' ' + postedUser.lastname}!`)
      setErrorType('add')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
      navigate('/dashboard')
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
    <div className='h-screen max-sm:px-2 sm:w-full flex justify-center items-end'>
      <div>
        <div className='flex flex-col items-start gap-y-0 pb-5 px-5 font-body min-w-[15vw]'>
          <h1 className='text-2xl text-white font-bold font-body p-0 m-0'>{'Join Questival !'}</h1>
          <p className='text-sm text-white p-0 m-0'>Just some details to let you in.</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 pb-7 px-5 font-body text-sm min-w-[15vw]' >
          <div className="flex gap-x-2 w-full">
            <input type='text' className='glass h-8 sm:h-12 p-2 font-body text-sm text-white bg-transparent w-full rounded-md' value={firstname} onChange={({ target }) => setFirstName(target.value)} placeholder='Firstname' />
            <input type='text' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full font-body text-sm rounded-md' value={lastname} onChange={({ target }) => setLastName(target.value)} placeholder='Lastname' />
          </div>
          <div className="flex gap-y-2 w-full">
            <input type='text' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full  rounded-md' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
          </div>
          <div className="flex gap-y-2 w-full">
            <input type='date' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full  rounded-md' value={birthdate} onChange={({ target }) => setBirthdate(target.value)} placeholder='Birthdate' />
          </div>
          <div className="flex gap-x-2 w-full">
            <input type='password' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full  rounded-md' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
            <input type='password' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full  rounded-md' value={cpassword} onChange={({ target }) => setCpassword(target.value)} placeholder='Confirm Password' />
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</small>
          </div>
          <div className="flex gap-y-2 w-full">
            <button type='submit' className='h-8 sm:h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md hover:bg-white transition-color duration-200' onClick={handleSubmit}>Sign up</button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-y-5 px-5 font-body text-sm min-w-[15vw]'>
          <div className="flex justify-center gap-y-2 w-full">
            <button className='glass h-12 min-[300px]:p-2 text-white bg-transparent hover:bg-[#4285F4] transition-color duration-200 w-full rounded-md' onClick={googleLogin} >
              <div className="flex justify-center items-center gap-x-3">
                <img src={googleIcon} className='w-[30px] h-auto' />
                <h1 className='p-0 m-0'>Google</h1>
              </div>
            </button>
          </div>
          <div className="flex gap-y-2 mt-auto">
            <small className='text-white'>{'Already a member? '} <Link className='hover:text-[#FC4ECF] transition-color duration-200' to={'/login'}>Login.</Link></small>
          </div>
          <div className="flex gap-x-2 text-[10px] text-white max-sm:mt-[8dvh] mt-[2dvh] min-[1800px]:mt-[12dvh] mb-10 min-[1800px]:mb-20">
            <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Terms,</Link>
            <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/privacy'}>Privacy Policy,</Link>
            {'and '}
            <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Cookies Policy.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
