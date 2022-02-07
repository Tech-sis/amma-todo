import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Alert, Divider } from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import styles from '../styles/login.module.css'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { logIn, googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/todos')
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
        <h1>Log In</h1>
        {error && (
          <Alert type="error" message="error" description={error} showIcon />
        )}
        <Form
          name="normal_login"
          className={styles.loginform}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              prefix={<UserOutlined className={styles.siteformitemicon} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              prefix={<LockOutlined className={styles.siteformitemicon} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className={styles.loginformforgot} to="/todos">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginformbutton}
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </Form.Item>
          <Divider>Or</Divider>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.button}
              onClick={handleGoogleSignIn}
            >
              <GoogleOutlined /> Log in with Google
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.create}>
          Don't have an account? <Link to="/sigup">Register now!</Link>
        </div>
      </div>
    </>
  )
}

export default Login
