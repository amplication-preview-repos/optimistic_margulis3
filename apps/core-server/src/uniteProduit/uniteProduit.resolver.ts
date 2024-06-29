import * as graphql from "@nestjs/graphql";
import { UniteProduitResolverBase } from "./base/uniteProduit.resolver.base";
import { UniteProduit } from "./base/UniteProduit";
import { UniteProduitService } from "./uniteProduit.service";

@graphql.Resolver(() => UniteProduit)
export class UniteProduitResolver extends UniteProduitResolverBase {
  constructor(protected readonly service: UniteProduitService) {
    super(service);
  }
}
