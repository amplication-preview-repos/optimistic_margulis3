import * as graphql from "@nestjs/graphql";
import { ConditionnementProduitResolverBase } from "./base/conditionnementProduit.resolver.base";
import { ConditionnementProduit } from "./base/ConditionnementProduit";
import { ConditionnementProduitService } from "./conditionnementProduit.service";

@graphql.Resolver(() => ConditionnementProduit)
export class ConditionnementProduitResolver extends ConditionnementProduitResolverBase {
  constructor(protected readonly service: ConditionnementProduitService) {
    super(service);
  }
}
