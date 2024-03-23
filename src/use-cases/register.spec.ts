import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const { user } = registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    console.log(user.password_hash)
  })
})
