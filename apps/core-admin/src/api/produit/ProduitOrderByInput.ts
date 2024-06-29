import { SortOrder } from "../../util/SortOrder";

export type ProduitOrderByInput = {
  caracteristiques?: SortOrder;
  categorieProduitId?: SortOrder;
  conditionnementProduitId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  nom?: SortOrder;
  nomenclature?: SortOrder;
  referenceErp?: SortOrder;
  updatedAt?: SortOrder;
};
