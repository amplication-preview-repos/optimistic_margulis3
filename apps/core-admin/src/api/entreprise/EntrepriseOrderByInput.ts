import { SortOrder } from "../../util/SortOrder";

export type EntrepriseOrderByInput = {
  adressesLivraison?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  margeDette?: SortOrder;
  nom?: SortOrder;
  signatureNumerique?: SortOrder;
  soldeClient?: SortOrder;
  updatedAt?: SortOrder;
};
