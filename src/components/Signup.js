import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Alert } from 'antd'
import { UserOutlined, GoogleOutlined } from '@ant-design/icons'
import { useUserAuth } from '../context/UserAuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUp, googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate('/todos')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Register User</h1>
        {error && (
          <Alert type="error" message="error" description={error} showIcon />
        )}
        <Form name="register" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input
              placeholder="E-mail"
              value={email}
              prefix={<UserOutlined className={styles.siteformitemicon} />}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
              className={styles.siteformitemicon}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button className={styles.loginformbutton} onClick={handleSubmit}>
              Sign up
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.button}
              onClick={handleGoogleSignIn}
            >
              <GoogleOutlined />Register with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Signup
