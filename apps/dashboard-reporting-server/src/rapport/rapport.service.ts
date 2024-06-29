import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RapportServiceBase } from "./base/rapport.service.base";

@Injectable()
export class RapportService extends RapportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
