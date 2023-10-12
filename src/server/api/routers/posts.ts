import { createTRPCRouter, protectedProcedure } from "../trpc";
import { createId } from "@paralleldrive/cuid2";
import { NextResponse } from "next/server";
import { z } from "zod";

export const postsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ text: z.string().min(1, "Campo necessário") }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.post.create({
        data: {
          id: createId(),
          text: input.text,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().min(1, "Campo necessário") }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.post.delete({
        where: { id: input.id, userId: ctx.session.user.id },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        text: z.string().min(1, "Campo necessário"),
        id: z.string().min(1, "Campo necessário"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.post.update({
        where: { id: input.id, userId: ctx.session.user.id },
        data: {
          text: input.text,
        },
      });
    }),

  findPostById: protectedProcedure
    .input(z.object({ id: z.string().min(1, "Campo necessário") }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
        include: {
          comment: {
            include: { user: { select: { name: true } } },
            orderBy: { createdAt: "asc" },
          },
          likes: true,
          user: { select: { name: true } },
        },
      });

      return {
        ...post,
        comment: post?.comment,
        user: post?.user,
      };
    }),

  findAllPost: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({ orderBy: { createdAt: "asc" } });
  }),

  findPostFollowings: protectedProcedure.query(async ({ ctx }) => {
    const followings = await ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { following: { select: { id: true } } },
    });
    if (!followings || followings.following.length < 1) return null;
    const arrayIds: string[] = [];
    for (const following of followings.following) {
      arrayIds.push(following.id);
    }
    return await ctx.prisma.post.findMany({
      where: { userId: { in: arrayIds } },
      orderBy: { createdAt: "asc" },
    });
  }),

  like: protectedProcedure
    .input(z.object({ postId: z.string().min(1, "Campo necessário") }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.postId },
        select: { likesCount: true },
      });
      if (!post) {
        return NextResponse.json(
          { error: "Poste não encontrado" },
          { status: 404 },
        );
      }
      await ctx.prisma.post.update({
        where: { id: input.postId },
        data: {
          likesCount: post.likesCount + 1,
          likes: {
            create: {
              id: createId(),
              user: { connect: { id: ctx.session.user.id } },
            },
          },
        },
      });
    }),

  unLike: protectedProcedure
    .input(z.object({ postId: z.string().min(1, "Campo necessário") }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.postId },
        select: { likesCount: true },
      });
      if (!post) {
        return NextResponse.json(
          { error: "Poste não encontrado" },
          { status: 404 },
        );
      }
      await ctx.prisma.post.update({
        where: { id: input.postId },
        data: {
          likesCount: post.likesCount - 1,
          likes: {
            deleteMany: { postId: input.postId, userId: ctx.session.user.id },
          },
        },
      });
    }),

  createComment: protectedProcedure
    .input(
      z.object({
        postId: z.string().min(1, "Campo necessário"),
        text: z.string().min(1, "Campo necessário"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.comment.create({
        data: {
          id: createId(),
          text: input.text,
          post: { connect: { id: input.postId } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  deleteComment: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, "Campo necessário"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.comment.delete({
        where: {
          id: input.id,
          AND: [
            {
              OR: [
                { userId: ctx.session.user.id },
                { post: { userId: ctx.session.user.id } },
              ],
            },
          ],
        },
      });
    }),

  updateComment: protectedProcedure
    .input(
      z.object({
        text: z.string().min(1, "Campo necessário"),
        id: z.string().min(1, "Campo necessário"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.comment.update({
        where: { id: input.id, userId: ctx.session.user.id },
        data: {
          text: input.text,
        },
      });
    }),
});
