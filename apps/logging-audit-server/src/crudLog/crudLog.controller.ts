import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrudLogService } from "./crudLog.service";
import { CrudLogControllerBase } from "./base/crudLog.controller.base";

@swagger.ApiTags("crudLogs")
@common.Controller("crudLogs")
export class CrudLogController extends CrudLogControllerBase {
  constructor(protected readonly service: CrudLogService) {
    super(service);
  }
}
