import { Module } from "@nestjs/common";
import { ReclamationModuleBase } from "./base/reclamation.module.base";
import { ReclamationService } from "./reclamation.service";
import { ReclamationController } from "./reclamation.controller";
import { ReclamationResolver } from "./reclamation.resolver";

@Module({
  imports: [ReclamationModuleBase],
  controllers: [ReclamationController],
  providers: [ReclamationService, ReclamationResolver],
  exports: [ReclamationService],
})
export class ReclamationModule {}
