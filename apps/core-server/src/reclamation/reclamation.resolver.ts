import * as graphql from "@nestjs/graphql";
import { ReclamationResolverBase } from "./base/reclamation.resolver.base";
import { Reclamation } from "./base/Reclamation";
import { ReclamationService } from "./reclamation.service";

@graphql.Resolver(() => Reclamation)
export class ReclamationResolver extends ReclamationResolverBase {
  constructor(protected readonly service: ReclamationService) {
    super(service);
  }
}
