import prisma from '../db'

// Get All the product
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  })
  res.json({ data: user.products })
}

// Find one with id & belongsToId
export const getOneProduct = async (req, res) => {
  const id = req.param.id
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  })
  res.json({ data: product })
}

// Create product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  })
  res.json({ data: product })
}

// Update product
export const updateProduct = async (req, res) => {
  const product = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  })
  res.json({ data: product })
}

// Delete
export const deleteProduct = async (req, res) => {
  const product = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  })

  res.json({ data: product })
}
