/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Reclamation as PrismaReclamation } from "@prisma/client";

export class ReclamationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReclamationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.reclamation.count(args);
  }

  async reclamations(
    args: Prisma.ReclamationFindManyArgs
  ): Promise<PrismaReclamation[]> {
    return this.prisma.reclamation.findMany(args);
  }
  async reclamation(
    args: Prisma.ReclamationFindUniqueArgs
  ): Promise<PrismaReclamation | null> {
    return this.prisma.reclamation.findUnique(args);
  }
  async createReclamation(
    args: Prisma.ReclamationCreateArgs
  ): Promise<PrismaReclamation> {
    return this.prisma.reclamation.create(args);
  }
  async updateReclamation(
    args: Prisma.ReclamationUpdateArgs
  ): Promise<PrismaReclamation> {
    return this.prisma.reclamation.update(args);
  }
  async deleteReclamation(
    args: Prisma.ReclamationDeleteArgs
  ): Promise<PrismaReclamation> {
    return this.prisma.reclamation.delete(args);
  }
}