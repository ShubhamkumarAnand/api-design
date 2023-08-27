import prisma from '../db'

export const getAllUpdates = async (req, res) => {
  const update = await prisma.update.findMany({
    where: {
      id: req.body.id,
    },
  })
  res.json({ data: update })
}
