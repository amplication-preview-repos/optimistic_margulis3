import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UniteProduitService } from "./uniteProduit.service";
import { UniteProduitControllerBase } from "./base/uniteProduit.controller.base";

@swagger.ApiTags("uniteProduits")
@common.Controller("uniteProduits")
export class UniteProduitController extends UniteProduitControllerBase {
  constructor(protected readonly service: UniteProduitService) {
    super(service);
  }
}
