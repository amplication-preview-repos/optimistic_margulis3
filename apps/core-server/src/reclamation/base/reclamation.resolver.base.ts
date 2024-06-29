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
import { Reclamation } from "./Reclamation";
import { ReclamationCountArgs } from "./ReclamationCountArgs";
import { ReclamationFindManyArgs } from "./ReclamationFindManyArgs";
import { ReclamationFindUniqueArgs } from "./ReclamationFindUniqueArgs";
import { DeleteReclamationArgs } from "./DeleteReclamationArgs";
import { ReclamationService } from "../reclamation.service";
@graphql.Resolver(() => Reclamation)
export class ReclamationResolverBase {
  constructor(protected readonly service: ReclamationService) {}

  async _reclamationsMeta(
    @graphql.Args() args: ReclamationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Reclamation])
  async reclamations(
    @graphql.Args() args: ReclamationFindManyArgs
  ): Promise<Reclamation[]> {
    return this.service.reclamations(args);
  }

  @graphql.Query(() => Reclamation, { nullable: true })
  async reclamation(
    @graphql.Args() args: ReclamationFindUniqueArgs
  ): Promise<Reclamation | null> {
    const result = await this.service.reclamation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reclamation)
  async deleteReclamation(
    @graphql.Args() args: DeleteReclamationArgs
  ): Promise<Reclamation | null> {
    try {
      return await this.service.deleteReclamation(args);
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