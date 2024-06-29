import { Module } from "@nestjs/common";
import { CrudLogModuleBase } from "./base/crudLog.module.base";
import { CrudLogService } from "./crudLog.service";
import { CrudLogController } from "./crudLog.controller";
import { CrudLogResolver } from "./crudLog.resolver";

@Module({
  imports: [CrudLogModuleBase],
  controllers: [CrudLogController],
  providers: [CrudLogService, CrudLogResolver],
  exports: [CrudLogService],
})
export class CrudLogModule {}
