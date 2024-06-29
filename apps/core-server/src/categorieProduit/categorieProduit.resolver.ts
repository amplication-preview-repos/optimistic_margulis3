import * as graphql from "@nestjs/graphql";
import { CategorieProduitResolverBase } from "./base/categorieProduit.resolver.base";
import { CategorieProduit } from "./base/CategorieProduit";
import { CategorieProduitService } from "./categorieProduit.service";

@graphql.Resolver(() => CategorieProduit)
export class CategorieProduitResolver extends CategorieProduitResolverBase {
  constructor(protected readonly service: CategorieProduitService) {
    super(service);
  }
}
