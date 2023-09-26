import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    // Endpoint para obter todos os comentários
    const comments = await prisma.comment.findMany();
    res.json(comments);
  } else if (req.method === 'POST') {
    // Endpoint para criar um novo comentário
    const { text, userId, postId } = req.body;
    const comment = await prisma.comment.create({
      data: {
        text,
        userId,
        postId,
      },
    });
    res.json(comment);
  } else if (req.method === 'PUT') {
    // Endpoint para atualizar um comentário existente
    const { id, text } = req.body;
    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { text },
    });
    res.json(updatedComment);
  } else if (req.method === 'DELETE') {
    // Endpoint para excluir um comentário
    const { id } = req.body;
    await prisma.comment.delete({
      where: { id },
    });
    res.json({ message: 'Comment deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
