import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConditionnementProduitServiceBase } from "./base/conditionnementProduit.service.base";

@Injectable()
export class ConditionnementProduitService extends ConditionnementProduitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
