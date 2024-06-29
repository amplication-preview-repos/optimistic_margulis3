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
import { UniteProduit } from "./UniteProduit";
import { UniteProduitCountArgs } from "./UniteProduitCountArgs";
import { UniteProduitFindManyArgs } from "./UniteProduitFindManyArgs";
import { UniteProduitFindUniqueArgs } from "./UniteProduitFindUniqueArgs";
import { CreateUniteProduitArgs } from "./CreateUniteProduitArgs";
import { UpdateUniteProduitArgs } from "./UpdateUniteProduitArgs";
import { DeleteUniteProduitArgs } from "./DeleteUniteProduitArgs";
import { UniteProduitService } from "../uniteProduit.service";
@graphql.Resolver(() => UniteProduit)
export class UniteProduitResolverBase {
  constructor(protected readonly service: UniteProduitService) {}

  async _uniteProduitsMeta(
    @graphql.Args() args: UniteProduitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UniteProduit])
  async uniteProduits(
    @graphql.Args() args: UniteProduitFindManyArgs
  ): Promise<UniteProduit[]> {
    return this.service.uniteProduits(args);
  }

  @graphql.Query(() => UniteProduit, { nullable: true })
  async uniteProduit(
    @graphql.Args() args: UniteProduitFindUniqueArgs
  ): Promise<UniteProduit | null> {
    const result = await this.service.uniteProduit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UniteProduit)
  async createUniteProduit(
    @graphql.Args() args: CreateUniteProduitArgs
  ): Promise<UniteProduit> {
    return await this.service.createUniteProduit({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UniteProduit)
  async updateUniteProduit(
    @graphql.Args() args: UpdateUniteProduitArgs
  ): Promise<UniteProduit | null> {
    try {
      return await this.service.updateUniteProduit({
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

  @graphql.Mutation(() => UniteProduit)
  async deleteUniteProduit(
    @graphql.Args() args: DeleteUniteProduitArgs
  ): Promise<UniteProduit | null> {
    try {
      return await this.service.deleteUniteProduit(args);
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