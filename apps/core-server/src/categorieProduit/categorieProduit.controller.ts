import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategorieProduitService } from "./categorieProduit.service";
import { CategorieProduitControllerBase } from "./base/categorieProduit.controller.base";

@swagger.ApiTags("categorieProduits")
@common.Controller("categorieProduits")
export class CategorieProduitController extends CategorieProduitControllerBase {
  constructor(protected readonly service: CategorieProduitService) {
    super(service);
  }
}
