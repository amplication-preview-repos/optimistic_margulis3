import { JsonFilter } from "../../util/JsonFilter";
import { CategorieProduitWhereUniqueInput } from "../categorieProduit/CategorieProduitWhereUniqueInput";
import { ConditionnementProduitWhereUniqueInput } from "../conditionnementProduit/ConditionnementProduitWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProduitWhereInput = {
  caracteristiques?: JsonFilter;
  categorieProduit?: CategorieProduitWhereUniqueInput;
  conditionnementProduit?: ConditionnementProduitWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  nom?: StringNullableFilter;
  nomenclature?: StringNullableFilter;
  referenceErp?: StringNullableFilter;
};
