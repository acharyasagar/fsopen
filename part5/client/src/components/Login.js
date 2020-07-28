import React, { useState } from 'react'

import authService from '../services/auth'

import Notification from './Notification'

const Login = props => {
  const { setUser } = props

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const res = await authService.login({ username, password })
      const user = Object.assign({}, res.data)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUser(user)
      authService.setToken(user.token)
    } catch (e) {
      setErr({ message: 'Invalid Credentials' })
      setTimeout(() => setErr(null), 5000)
    }
  }

  return (
    <div className="panel">
      <Notification err={err} success={null} />
      <h4>Login to application</h4>
      <form onSubmit={handleLogin}>
        <section>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </section>
        <section>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </section>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login
