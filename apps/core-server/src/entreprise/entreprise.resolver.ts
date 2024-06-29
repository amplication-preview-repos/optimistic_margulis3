import * as graphql from "@nestjs/graphql";
import { EntrepriseResolverBase } from "./base/entreprise.resolver.base";
import { Entreprise } from "./base/Entreprise";
import { EntrepriseService } from "./entreprise.service";

@graphql.Resolver(() => Entreprise)
export class EntrepriseResolver extends EntrepriseResolverBase {
  constructor(protected readonly service: EntrepriseService) {
    super(service);
  }
}
