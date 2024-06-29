/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CrudLog as PrismaCrudLog } from "@prisma/client";

export class CrudLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CrudLogCountArgs, "select">): Promise<number> {
    return this.prisma.crudLog.count(args);
  }

  async crudLogs(args: Prisma.CrudLogFindManyArgs): Promise<PrismaCrudLog[]> {
    return this.prisma.crudLog.findMany(args);
  }
  async crudLog(
    args: Prisma.CrudLogFindUniqueArgs
  ): Promise<PrismaCrudLog | null> {
    return this.prisma.crudLog.findUnique(args);
  }
  async createCrudLog(args: Prisma.CrudLogCreateArgs): Promise<PrismaCrudLog> {
    return this.prisma.crudLog.create(args);
  }
  async updateCrudLog(args: Prisma.CrudLogUpdateArgs): Promise<PrismaCrudLog> {
    return this.prisma.crudLog.update(args);
  }
  async deleteCrudLog(args: Prisma.CrudLogDeleteArgs): Promise<PrismaCrudLog> {
    return this.prisma.crudLog.delete(args);
  }
}
