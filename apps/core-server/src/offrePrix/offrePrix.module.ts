import { Module } from "@nestjs/common";
import { OffrePrixModuleBase } from "./base/offrePrix.module.base";
import { OffrePrixService } from "./offrePrix.service";
import { OffrePrixController } from "./offrePrix.controller";
import { OffrePrixResolver } from "./offrePrix.resolver";

@Module({
  imports: [OffrePrixModuleBase],
  controllers: [OffrePrixController],
  providers: [OffrePrixService, OffrePrixResolver],
  exports: [OffrePrixService],
})
export class OffrePrixModule {}
