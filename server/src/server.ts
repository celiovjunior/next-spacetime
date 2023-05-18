import fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import { memoriesRoutes } from './routes/memories'
import { authRoute } from './routes/auth'
import { fastifyJwt as jwt } from '@fastify/jwt'

const app = fastify()

// in production, put the host url
app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)
app.register(authRoute)
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🐎 Server is running on http://localhost:3333')
  })
