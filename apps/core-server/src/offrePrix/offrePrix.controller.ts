import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OffrePrixService } from "./offrePrix.service";
import { OffrePrixControllerBase } from "./base/offrePrix.controller.base";

@swagger.ApiTags("offrePrixes")
@common.Controller("offrePrixes")
export class OffrePrixController extends OffrePrixControllerBase {
  constructor(protected readonly service: OffrePrixService) {
    super(service);
  }
}
