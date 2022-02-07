import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Todo from './components/Todo'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/todos"
              element={
                <ProtectedRoute>
                  <Todo />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </div>
  )
}

export default App

// {/* <Todo text={todo} /> */}
// const [todos, setTodos] = useState([])
// const [input, setInput] = useState('')

// const todosCollectionRef = collection(db, 'todos')

// const createTodo = async (event) => {
//   event.preventDefault()
//   setTodos([...todos, input])
//   setInput('')
//   await addDoc(todosCollectionRef, { todo: input })
// }

// useEffect(() => {
//   const getTodos = async () => {
//     const data = await getDocs(todosCollectionRef)
//     // console.log(data);
//     setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//   }
//   getTodos()
// }, [])
