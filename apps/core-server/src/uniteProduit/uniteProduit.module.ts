import { Module } from "@nestjs/common";
import { UniteProduitModuleBase } from "./base/uniteProduit.module.base";
import { UniteProduitService } from "./uniteProduit.service";
import { UniteProduitController } from "./uniteProduit.controller";
import { UniteProduitResolver } from "./uniteProduit.resolver";

@Module({
  imports: [UniteProduitModuleBase],
  controllers: [UniteProduitController],
  providers: [UniteProduitService, UniteProduitResolver],
  exports: [UniteProduitService],
})
export class UniteProduitModule {}
