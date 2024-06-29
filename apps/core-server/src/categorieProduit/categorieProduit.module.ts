import { Module } from "@nestjs/common";
import { CategorieProduitModuleBase } from "./base/categorieProduit.module.base";
import { CategorieProduitService } from "./categorieProduit.service";
import { CategorieProduitController } from "./categorieProduit.controller";
import { CategorieProduitResolver } from "./categorieProduit.resolver";

@Module({
  imports: [CategorieProduitModuleBase],
  controllers: [CategorieProduitController],
  providers: [CategorieProduitService, CategorieProduitResolver],
  exports: [CategorieProduitService],
})
export class CategorieProduitModule {}
