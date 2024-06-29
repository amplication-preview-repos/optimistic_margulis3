import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointAchatService } from "./pointAchat.service";
import { PointAchatControllerBase } from "./base/pointAchat.controller.base";

@swagger.ApiTags("pointAchats")
@common.Controller("pointAchats")
export class PointAchatController extends PointAchatControllerBase {
  constructor(protected readonly service: PointAchatService) {
    super(service);
  }
}
