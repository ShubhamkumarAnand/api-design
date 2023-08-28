import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import router from './routes'
import { protect } from './modules/auth'
import { createNewUser, signIN } from './handlers/user'

// Creating an instance of express app
const app = express()

// By default it allows all external agents to have access to the api
app.use(cors())

// Logging the request into the terminal
app.use(morgan('dev'))

// parses incoming requests with JSON payloads
app.use(express.json())

// Allows the url query string to be parsed into object for the consuming
// google.com/page?auth=true?page=10 -> parsed into object available for the route
app.use(express.urlencoded({ extended: true }))

// Express will intercept only the route and function available above

app.get('/', (req, res, next) => {
  // res.status(200)
  // res.json({ message: 'Welcome to Node!' })
  setTimeout(() => {
    next(new Error('Messed Up'))
  }, 10)
})

// Protected routes
app.use('/api', protect, router)

// Authorization
app.post('/sign-up', createNewUser)
app.post('/sign-in', signIN)

// Error
app.use((err, req, res, next) => {
  res.json({ message: `OOPs! 🤭 ${err.message}` })
  next()
})
export default app
