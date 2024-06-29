import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TemplateNotificationService } from "./templateNotification.service";
import { TemplateNotificationControllerBase } from "./base/templateNotification.controller.base";

@swagger.ApiTags("templateNotifications")
@common.Controller("templateNotifications")
export class TemplateNotificationController extends TemplateNotificationControllerBase {
  constructor(protected readonly service: TemplateNotificationService) {
    super(service);
  }
}
