import * as graphql from "@nestjs/graphql";
import { OffrePrixResolverBase } from "./base/offrePrix.resolver.base";
import { OffrePrix } from "./base/OffrePrix";
import { OffrePrixService } from "./offrePrix.service";

@graphql.Resolver(() => OffrePrix)
export class OffrePrixResolver extends OffrePrixResolverBase {
  constructor(protected readonly service: OffrePrixService) {
    super(service);
  }
}
