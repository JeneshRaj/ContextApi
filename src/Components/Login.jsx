
import React, {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userName,setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type = 'text' onChange={(e) => setUsername(e.target.value)} value = {userName} placeholder = 'username'  />
      <input type = 'text' onChange={(e) => setPassword(e.target.value)} value = {password} placeholder = 'Password'  />
     <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

