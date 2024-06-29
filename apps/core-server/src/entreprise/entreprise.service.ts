import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntrepriseServiceBase } from "./base/entreprise.service.base";

@Injectable()
export class EntrepriseService extends EntrepriseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
