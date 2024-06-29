import { InputJsonValue } from "../../types";
import { CategorieProduitWhereUniqueInput } from "../categorieProduit/CategorieProduitWhereUniqueInput";
import { ConditionnementProduitWhereUniqueInput } from "../conditionnementProduit/ConditionnementProduitWhereUniqueInput";

export type ProduitUpdateInput = {
  caracteristiques?: InputJsonValue;
  categorieProduit?: CategorieProduitWhereUniqueInput | null;
  conditionnementProduit?: ConditionnementProduitWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  nom?: string | null;
  nomenclature?: string | null;
  referenceErp?: string | null;
};
