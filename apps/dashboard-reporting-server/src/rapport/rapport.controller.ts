import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RapportService } from "./rapport.service";
import { RapportControllerBase } from "./base/rapport.controller.base";

@swagger.ApiTags("rapports")
@common.Controller("rapports")
export class RapportController extends RapportControllerBase {
  constructor(protected readonly service: RapportService) {
    super(service);
  }
}
