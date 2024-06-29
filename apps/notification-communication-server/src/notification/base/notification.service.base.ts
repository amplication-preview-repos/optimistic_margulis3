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
  Notification as PrismaNotification,
  TemplateNotification as PrismaTemplateNotification,
} from "@prisma/client";

export class NotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.notification.count(args);
  }

  async notifications(
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.notification.findMany(args);
  }
  async notification(
    args: Prisma.NotificationFindUniqueArgs
  ): Promise<PrismaNotification | null> {
    return this.prisma.notification.findUnique(args);
  }
  async createNotification(
    args: Prisma.NotificationCreateArgs
  ): Promise<PrismaNotification> {
    return this.prisma.notification.create(args);
  }
  async updateNotification(
    args: Prisma.NotificationUpdateArgs
  ): Promise<PrismaNotification> {
    return this.prisma.notification.update(args);
  }
  async deleteNotification(
    args: Prisma.NotificationDeleteArgs
  ): Promise<PrismaNotification> {
    return this.prisma.notification.delete(args);
  }

  async getTemplateNotification(
    parentId: string
  ): Promise<PrismaTemplateNotification | null> {
    return this.prisma.notification
      .findUnique({
        where: { id: parentId },
      })
      .templateNotification();
  }
}
