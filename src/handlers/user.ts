import prisma from '../db'
import { comparePassword, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signIN = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  const isValid = await comparePassword(req.body.password, user.password)
  if (!user || !isValid) {
    res.status(401)
    res.json({ message: 'Not valid Username' })
    return
  }

  const token = createJWT(user)
  res.json({ token })
}
