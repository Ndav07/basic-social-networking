import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    // Endpoint para obter todos os likes
    const likes = await prisma.like.findMany();
    res.json(likes);
  } else if (req.method === 'POST') {
    // Endpoint para criar um novo like
    const { userId, postId } = req.body;
    const like = await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });
    res.json(like);
  } else if (req.method === 'PUT') {
    // Endpoint para atualizar um like existente (geralmente não faz sentido atualizar likes, mas é possível)
    const { id, userId, postId } = req.body;
    const updatedLike = await prisma.like.update({
      where: { id },
      data: { userId, postId },
    });
    res.json(updatedLike);
  } else if (req.method === 'DELETE') {
    // Endpoint para excluir um like
    const { id } = req.body;
    await prisma.like.delete({
      where: { id },
    });
    res.json({ message: 'Like deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
