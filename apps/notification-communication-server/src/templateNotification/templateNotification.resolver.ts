import * as graphql from "@nestjs/graphql";
import { TemplateNotificationResolverBase } from "./base/templateNotification.resolver.base";
import { TemplateNotification } from "./base/TemplateNotification";
import { TemplateNotificationService } from "./templateNotification.service";

@graphql.Resolver(() => TemplateNotification)
export class TemplateNotificationResolver extends TemplateNotificationResolverBase {
  constructor(protected readonly service: TemplateNotificationService) {
    super(service);
  }
}
