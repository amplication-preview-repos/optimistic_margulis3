import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategorieProduitServiceBase } from "./base/categorieProduit.service.base";

@Injectable()
export class CategorieProduitService extends CategorieProduitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
