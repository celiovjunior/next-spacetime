import fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import { uploadRoutes } from './routes/upload'
import { memoriesRoutes } from './routes/memories'
import { authRoute } from './routes/auth'
import { fastifyJwt as jwt } from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { resolve } from 'path'

const app = fastify()

// in production, put the host url
app.register(cors, {
  origin: true,
})

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(multipart) // lib to upload files
app.register(memoriesRoutes)
app.register(uploadRoutes)
app.register(authRoute)
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🐎 Server is running at http://localhost:3333')
  })
