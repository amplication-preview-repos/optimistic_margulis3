/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Entreprise as PrismaEntreprise } from "@prisma/client";

export class EntrepriseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EntrepriseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.entreprise.count(args);
  }

  async entreprises(
    args: Prisma.EntrepriseFindManyArgs
  ): Promise<PrismaEntreprise[]> {
    return this.prisma.entreprise.findMany(args);
  }
  async entreprise(
    args: Prisma.EntrepriseFindUniqueArgs
  ): Promise<PrismaEntreprise | null> {
    return this.prisma.entreprise.findUnique(args);
  }
  async createEntreprise(
    args: Prisma.EntrepriseCreateArgs
  ): Promise<PrismaEntreprise> {
    return this.prisma.entreprise.create(args);
  }
  async updateEntreprise(
    args: Prisma.EntrepriseUpdateArgs
  ): Promise<PrismaEntreprise> {
    return this.prisma.entreprise.update(args);
  }
  async deleteEntreprise(
    args: Prisma.EntrepriseDeleteArgs
  ): Promise<PrismaEntreprise> {
    return this.prisma.entreprise.delete(args);
  }
}