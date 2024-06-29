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
import { TemplateNotification } from "./TemplateNotification";
import { TemplateNotificationCountArgs } from "./TemplateNotificationCountArgs";
import { TemplateNotificationFindManyArgs } from "./TemplateNotificationFindManyArgs";
import { TemplateNotificationFindUniqueArgs } from "./TemplateNotificationFindUniqueArgs";
import { CreateTemplateNotificationArgs } from "./CreateTemplateNotificationArgs";
import { UpdateTemplateNotificationArgs } from "./UpdateTemplateNotificationArgs";
import { DeleteTemplateNotificationArgs } from "./DeleteTemplateNotificationArgs";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { TemplateNotificationService } from "../templateNotification.service";
@graphql.Resolver(() => TemplateNotification)
export class TemplateNotificationResolverBase {
  constructor(protected readonly service: TemplateNotificationService) {}

  async _templateNotificationsMeta(
    @graphql.Args() args: TemplateNotificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TemplateNotification])
  async templateNotifications(
    @graphql.Args() args: TemplateNotificationFindManyArgs
  ): Promise<TemplateNotification[]> {
    return this.service.templateNotifications(args);
  }

  @graphql.Query(() => TemplateNotification, { nullable: true })
  async templateNotification(
    @graphql.Args() args: TemplateNotificationFindUniqueArgs
  ): Promise<TemplateNotification | null> {
    const result = await this.service.templateNotification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TemplateNotification)
  async createTemplateNotification(
    @graphql.Args() args: CreateTemplateNotificationArgs
  ): Promise<TemplateNotification> {
    return await this.service.createTemplateNotification({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TemplateNotification)
  async updateTemplateNotification(
    @graphql.Args() args: UpdateTemplateNotificationArgs
  ): Promise<TemplateNotification | null> {
    try {
      return await this.service.updateTemplateNotification({
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

  @graphql.Mutation(() => TemplateNotification)
  async deleteTemplateNotification(
    @graphql.Args() args: DeleteTemplateNotificationArgs
  ): Promise<TemplateNotification | null> {
    try {
      return await this.service.deleteTemplateNotification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Notification], { name: "notifications" })
  async findNotifications(
    @graphql.Parent() parent: TemplateNotification,
    @graphql.Args() args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    const results = await this.service.findNotifications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}