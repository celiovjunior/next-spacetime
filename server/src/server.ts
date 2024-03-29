import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()
app.register(authRoutes)
app.register(memoriesRoutes)
app.register(cors, {
  origin: true, // all front url can access this backend
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🏇 HTTP server is running')
  })
