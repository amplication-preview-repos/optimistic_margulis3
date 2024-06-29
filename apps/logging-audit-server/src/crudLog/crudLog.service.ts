import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrudLogServiceBase } from "./base/crudLog.service.base";

@Injectable()
export class CrudLogService extends CrudLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
