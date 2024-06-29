import { StringFilter } from "../../util/StringFilter";
import { ProduitListRelationFilter } from "../produit/ProduitListRelationFilter";

export type CategorieProduitWhereInput = {
  id?: StringFilter;
  produits?: ProduitListRelationFilter;
};
