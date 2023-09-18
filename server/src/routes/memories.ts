import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories
  })
  app.get('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })
  app.post('/memories', async () => {
    const users = await prisma.user.findMany()
    return users
  })
  app.put('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })
  app.delete('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })
}
