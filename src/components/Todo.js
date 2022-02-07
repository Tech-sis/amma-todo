import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/home.module.css'
import { db } from '../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useUserAuth } from '../context/UserAuthContext'

const Todo = () => {
  const { user } = useUserAuth()
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const todosCollectionRef = collection(db, 'todos')

  const createTodo = async (event) => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
    await addDoc(todosCollectionRef, { todo: input })
  }

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef)
      // console.log(data);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTodos()
  }, [])

  return (
    <div>
      {/* <li>{props.text}</li> */}
      <div className={styles.container}>
        <h2>What's up, {user && user.email}!</h2>

        <form className={styles.form}>
          <input
            value={input}
            placeholder="Create Todo"
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={createTodo}>Add Todo</button>
        </form>

        <div>
        <h3>All Tasks</h3>
          <ul>
            {todos.map((todo) => (
              <li>{todo.todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Todo

//props - properties always us to differentiate one component from another
