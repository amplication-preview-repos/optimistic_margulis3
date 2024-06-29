import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReclamationService } from "./reclamation.service";
import { ReclamationControllerBase } from "./base/reclamation.controller.base";

@swagger.ApiTags("reclamations")
@common.Controller("reclamations")
export class ReclamationController extends ReclamationControllerBase {
  constructor(protected readonly service: ReclamationService) {
    super(service);
  }
}
