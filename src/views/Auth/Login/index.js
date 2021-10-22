import { useState } from 'react'
import { loginUser } from '../../../config/firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <div>

    <input
      onChange={e => setEmail(e.target.value)}
      type="email" placeholder="Enter your email" />
    <br />
    <input
      onChange={e => setPassword(e.target.value)}
      type="password" placeholder="Enter your password" />
    <br />

    <button onClick={() => loginUser(email, password)}>Login</button>
  </div>
}

export default Login