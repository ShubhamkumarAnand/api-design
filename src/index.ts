import app from './server'
import * as dotenv from 'dotenv'
import config from './config'

dotenv.config()

// Handling the error in the node which cannot be handled by express
process.on('uncaughtException', () => {
  console.log('Node Error')
})

process.on('unhandledRejection', () => {
  console.log('Some Asynchronous Error')
})

// Starting a server on a port
app.listen(config.port, () => {
  console.log(`Server is listening on : http://localhost:${config.port}`)
})
