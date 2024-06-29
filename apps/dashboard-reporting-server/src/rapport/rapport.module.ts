import { Module } from "@nestjs/common";
import { RapportModuleBase } from "./base/rapport.module.base";
import { RapportService } from "./rapport.service";
import { RapportController } from "./rapport.controller";
import { RapportResolver } from "./rapport.resolver";

@Module({
  imports: [RapportModuleBase],
  controllers: [RapportController],
  providers: [RapportService, RapportResolver],
  exports: [RapportService],
})
export class RapportModule {}
