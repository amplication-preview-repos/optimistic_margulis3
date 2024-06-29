import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemplateNotificationServiceBase } from "./base/templateNotification.service.base";

@Injectable()
export class TemplateNotificationService extends TemplateNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
