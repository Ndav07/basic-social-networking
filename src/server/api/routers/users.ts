import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

const UserValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export const usersRouter = createTRPCRouter({
  create: publicProcedure
    .input(UserValidator)
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;
      const emailExists = await ctx.prisma.user.findUnique({where: {email}});

      if(emailExists) throw new TRPCError({code: "BAD_REQUEST" , message: "O email já está em uso"});

      const hashedPassword = await hash(password, 8);

      const user = await ctx.prisma.user.create({
        data: {
          id: createId(),
          name,
          email,
          password: hashedPassword,
        },
      });

      return user;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().cuid2() }))
    .query(async ({ ctx, input: { id } }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id,
        },
      });

      return user;
    }),

  update: protectedProcedure
    .input(
      z
        .object({
          id: z.string().cuid2(),
        })
        .merge(UserValidator.partial()),
    )
    .mutation(async ({ ctx, input: { id, ...data } }) => {
      const user = await ctx.prisma.user.update({
        where: {
          id,
        },
        data,
      });

      return user;
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ ctx, input: { id } }) => {
      await ctx.prisma.user.delete({
        where: {
          id,
        },
      });
    }),

  myPosts: protectedProcedure.query(async ({ ctx: { prisma, session } }) => {
    return await prisma.post.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { comment: true, likes: true } } },
    });
  }),

  myFollowersAndfollowing: protectedProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const [followers, following] = await prisma.$transaction([
        prisma.user.findMany({
          where: { id: session.user.id },
          select: { followers: true },
        }),
        prisma.user.findMany({
          where: { id: session.user.id },
          select: { following: true },
        }),
      ]);
      return { followers, following };
    },
  ),

  me: protectedProcedure.query(async ({ ctx: { prisma, session } }) => {
    return prisma.user.findUnique({
      where: { id: session.user.id },
      include: { _count: { select: { followers: true, following: true } } },
    });
  }),

  follow: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ ctx: { prisma, session }, input: { id } }) => {
      await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: { following: { connect: { id } } },
      });
    }),

  unFollow: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ ctx, input: { id } }) => {
      await ctx.prisma.user.update({
        where: {
          id,
        },
        data: { following: { disconnect: { id } } },
      });
    }),

  removeFollower: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ ctx, input: { id } }) => {
      await ctx.prisma.user.update({
        where: {
          id,
        },
        data: { followers: { disconnect: { id } } },
      });
    }),
});
