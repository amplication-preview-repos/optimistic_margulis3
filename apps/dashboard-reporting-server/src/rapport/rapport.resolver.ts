import * as graphql from "@nestjs/graphql";
import { RapportResolverBase } from "./base/rapport.resolver.base";
import { Rapport } from "./base/Rapport";
import { RapportService } from "./rapport.service";

@graphql.Resolver(() => Rapport)
export class RapportResolver extends RapportResolverBase {
  constructor(protected readonly service: RapportService) {
    super(service);
  }
}
