import { useState } from 'react'
import { registerUser, loginUser } from '../../config/firebase'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setName] = useState('')
  const [age, setAge] = useState('')

  return <div>
    <input
      onChange={e => setName(e.target.value)}
      type="name" placeholder="Write your name" />
    <br />

    <input
      onChange={e => setAge(e.target.value)}
      type="number" placeholder="Write your age" />
    <br />
    
    <input
      onChange={e => setEmail(e.target.value)}
      type="email" placeholder="Write your email" />
    <br />
    <input
      onChange={e => setPassword(e.target.value)}
      type="password" placeholder="Write your password" />
    <br />
    <button onClick={() => registerUser({email, password, fullName, age})}>Sign up</button>
    <button onClick={() => loginUser(email, password)}>Login</button>
  </div>
}

export default Auth