import { useState } from 'react'
import { registerUser} from '../../../config/firebase'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setName] = useState('')
  const [age, setAge] = useState('')

  return <div>
    <input
      onChange={e => setName(e.target.value)}
      type="name" placeholder="Enter your name" />
    <br />

    <input
      onChange={e => setAge(e.target.value)}
      type="number" placeholder="Enter your age" />
    <br />
    
    <input
      onChange={e => setEmail(e.target.value)}
      type="email" placeholder="Enter your email" />
    <br />
    <input
      onChange={e => setPassword(e.target.value)}
      type="password" placeholder="Enter your password" />
    <br />
    <button onClick={() => registerUser({email, password, fullName, age})}>Sign up</button>
    
  </div>
}

export default Signup