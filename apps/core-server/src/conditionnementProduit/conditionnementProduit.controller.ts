import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConditionnementProduitService } from "./conditionnementProduit.service";
import { ConditionnementProduitControllerBase } from "./base/conditionnementProduit.controller.base";

@swagger.ApiTags("conditionnementProduits")
@common.Controller("conditionnementProduits")
export class ConditionnementProduitController extends ConditionnementProduitControllerBase {
  constructor(protected readonly service: ConditionnementProduitService) {
    super(service);
  }
}
