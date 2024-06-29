import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  adressesLivraison?: SortOrder;
  compagnie?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  motDePasse?: SortOrder;
  nom?: SortOrder;
  profil?: SortOrder;
  updatedAt?: SortOrder;
};
