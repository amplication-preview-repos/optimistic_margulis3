import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReclamationServiceBase } from "./base/reclamation.service.base";

@Injectable()
export class ReclamationService extends ReclamationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
