import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntrepriseService } from "./entreprise.service";
import { EntrepriseControllerBase } from "./base/entreprise.controller.base";

@swagger.ApiTags("entreprises")
@common.Controller("entreprises")
export class EntrepriseController extends EntrepriseControllerBase {
  constructor(protected readonly service: EntrepriseService) {
    super(service);
  }
}
