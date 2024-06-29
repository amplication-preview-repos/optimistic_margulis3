import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UniteProduitServiceBase } from "./base/uniteProduit.service.base";

@Injectable()
export class UniteProduitService extends UniteProduitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
