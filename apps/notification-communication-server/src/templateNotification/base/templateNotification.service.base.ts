/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TemplateNotification as PrismaTemplateNotification,
  Notification as PrismaNotification,
} from "@prisma/client";

export class TemplateNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TemplateNotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.templateNotification.count(args);
  }

  async templateNotifications(
    args: Prisma.TemplateNotificationFindManyArgs
  ): Promise<PrismaTemplateNotification[]> {
    return this.prisma.templateNotification.findMany(args);
  }
  async templateNotification(
    args: Prisma.TemplateNotificationFindUniqueArgs
  ): Promise<PrismaTemplateNotification | null> {
    return this.prisma.templateNotification.findUnique(args);
  }
  async createTemplateNotification(
    args: Prisma.TemplateNotificationCreateArgs
  ): Promise<PrismaTemplateNotification> {
    return this.prisma.templateNotification.create(args);
  }
  async updateTemplateNotification(
    args: Prisma.TemplateNotificationUpdateArgs
  ): Promise<PrismaTemplateNotification> {
    return this.prisma.templateNotification.update(args);
  }
  async deleteTemplateNotification(
    args: Prisma.TemplateNotificationDeleteArgs
  ): Promise<PrismaTemplateNotification> {
    return this.prisma.templateNotification.delete(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.templateNotification
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }
}