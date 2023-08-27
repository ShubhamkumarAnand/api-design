import app from './server'
import * as dotenv from 'dotenv'

dotenv.config()

// Starting a server on a port
app.listen(3000)
