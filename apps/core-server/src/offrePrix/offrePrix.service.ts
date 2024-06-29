import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OffrePrixServiceBase } from "./base/offrePrix.service.base";

@Injectable()
export class OffrePrixService extends OffrePrixServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
