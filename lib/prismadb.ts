import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
// use `prisma` in your application to read and write data in your DB
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
export default prismadb;
