import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
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
