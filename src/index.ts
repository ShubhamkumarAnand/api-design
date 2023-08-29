import app from './server'
import * as dotenv from 'dotenv'

dotenv.config()

// Handling the error in the node which cannot be handled by express
process.on('uncaughtException', () => {
  console.log('Node Error')
})

process.on('unhandledRejection', () => {
  console.log('Some Asynchronous Error')
})

// Starting a server on a port
app.listen(3000)
