import { StringFilter } from "../../util/StringFilter";
import { ProduitListRelationFilter } from "../produit/ProduitListRelationFilter";

export type ConditionnementProduitWhereInput = {
  id?: StringFilter;
  produits?: ProduitListRelationFilter;
};
