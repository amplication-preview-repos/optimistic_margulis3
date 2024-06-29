/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CrudLog } from "./CrudLog";
import { CrudLogCountArgs } from "./CrudLogCountArgs";
import { CrudLogFindManyArgs } from "./CrudLogFindManyArgs";
import { CrudLogFindUniqueArgs } from "./CrudLogFindUniqueArgs";
import { CreateCrudLogArgs } from "./CreateCrudLogArgs";
import { UpdateCrudLogArgs } from "./UpdateCrudLogArgs";
import { DeleteCrudLogArgs } from "./DeleteCrudLogArgs";
import { CrudLogService } from "../crudLog.service";
@graphql.Resolver(() => CrudLog)
export class CrudLogResolverBase {
  constructor(protected readonly service: CrudLogService) {}

  async _crudLogsMeta(
    @graphql.Args() args: CrudLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CrudLog])
  async crudLogs(
    @graphql.Args() args: CrudLogFindManyArgs
  ): Promise<CrudLog[]> {
    return this.service.crudLogs(args);
  }

  @graphql.Query(() => CrudLog, { nullable: true })
  async crudLog(
    @graphql.Args() args: CrudLogFindUniqueArgs
  ): Promise<CrudLog | null> {
    const result = await this.service.crudLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CrudLog)
  async createCrudLog(
    @graphql.Args() args: CreateCrudLogArgs
  ): Promise<CrudLog> {
    return await this.service.createCrudLog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CrudLog)
  async updateCrudLog(
    @graphql.Args() args: UpdateCrudLogArgs
  ): Promise<CrudLog | null> {
    try {
      return await this.service.updateCrudLog({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CrudLog)
  async deleteCrudLog(
    @graphql.Args() args: DeleteCrudLogArgs
  ): Promise<CrudLog | null> {
    try {
      return await this.service.deleteCrudLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}