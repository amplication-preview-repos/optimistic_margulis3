import { Module } from "@nestjs/common";
import { ConditionnementProduitModuleBase } from "./base/conditionnementProduit.module.base";
import { ConditionnementProduitService } from "./conditionnementProduit.service";
import { ConditionnementProduitController } from "./conditionnementProduit.controller";
import { ConditionnementProduitResolver } from "./conditionnementProduit.resolver";

@Module({
  imports: [ConditionnementProduitModuleBase],
  controllers: [ConditionnementProduitController],
  providers: [ConditionnementProduitService, ConditionnementProduitResolver],
  exports: [ConditionnementProduitService],
})
export class ConditionnementProduitModule {}
