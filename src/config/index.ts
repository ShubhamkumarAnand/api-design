/* eslint-disable @typescript-eslint/no-var-requires */
import merge from 'lodash.merge'
import prod from './prod'
import testing from './testing'
import local from './local'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const stage = process.env.NODE_ENV || 'stage'
let envConfig

if (stage === 'production') {
  envConfig = prod
} else if (stage === 'testing') {
  envConfig = testing
} else {
  envConfig = local
}

export default merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secret: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DATABASE_URL,
    },
  },
  envConfig
)
