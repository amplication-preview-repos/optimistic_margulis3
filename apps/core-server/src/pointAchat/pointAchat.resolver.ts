import * as graphql from "@nestjs/graphql";
import { PointAchatResolverBase } from "./base/pointAchat.resolver.base";
import { PointAchat } from "./base/PointAchat";
import { PointAchatService } from "./pointAchat.service";

@graphql.Resolver(() => PointAchat)
export class PointAchatResolver extends PointAchatResolverBase {
  constructor(protected readonly service: PointAchatService) {
    super(service);
  }
}
