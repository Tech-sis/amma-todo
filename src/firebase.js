import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBLOp8a4fkGR7I_fAS4rtF-TpP7KIMhEWU',
  authDomain: 'amma-todo.firebaseapp.com',
  projectId: 'amma-todo',
  storageBucket: 'amma-todo.appspot.com',
  messagingSenderId: '358631986158',
  appId: '1:358631986158:web:32072ef31a73a01cfcf4ff',
  measurementId: 'G-4P2C10BGB9',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app

// import React from 'react'
// import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyBLOp8a4fkGR7I_fAS4rtF-TpP7KIMhEWU',
//   authDomain: 'amma-todo.firebaseapp.com',
//   projectId: 'amma-todo',
//   storageBucket: 'amma-todo.appspot.com',
//   messagingSenderId: '358631986158',
//   appId: '1:358631986158:web:32072ef31a73a01cfcf4ff',
//   measurementId: 'G-4P2C10BGB9',
// })

// const db = firebaseApp.firestore()

// export default db

// import firebase from 'firebase'

// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyBLOp8a4fkGR7I_fAS4rtF-TpP7KIMhEWU',
//   authDomain: 'amma-todo.firebaseapp.com',
//   projectId: 'amma-todo',
//   storageBucket: 'amma-todo.appspot.com',
//   messagingSenderId: '358631986158',
//   appId: '1:358631986158:web:32072ef31a73a01cfcf4ff',
//   measurementId: 'G-4P2C10BGB9',
// })

// // const firebaseApp = (firebaseConfig)
// const db = firebaseApp.firestore()

// export default db
