import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointAchatServiceBase } from "./base/pointAchat.service.base";

@Injectable()
export class PointAchatService extends PointAchatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
