import { useState } from 'react'
import { registerUser, loginUser } from '../../config/firebase'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <div>
    <input
      onChange={e => setEmail(e.target.value)}
      type="email" placeholder="Write your email" />
    <br />
    <input
      onChange={e => setPassword(e.target.value)}
      type="password" placeholder="Write your password" />
    <br />
    <button onClick={() => registerUser(email, password)}>Sign up</button>
    <button onClick={() => loginUser(email, password)}>Login</button>
  </div>
}

export default Auth