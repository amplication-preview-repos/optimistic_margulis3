import { Module } from "@nestjs/common";
import { TemplateNotificationModuleBase } from "./base/templateNotification.module.base";
import { TemplateNotificationService } from "./templateNotification.service";
import { TemplateNotificationController } from "./templateNotification.controller";
import { TemplateNotificationResolver } from "./templateNotification.resolver";

@Module({
  imports: [TemplateNotificationModuleBase],
  controllers: [TemplateNotificationController],
  providers: [TemplateNotificationService, TemplateNotificationResolver],
  exports: [TemplateNotificationService],
})
export class TemplateNotificationModule {}
