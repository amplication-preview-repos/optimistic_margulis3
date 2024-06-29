import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UtilisateurWhereInput = {
  adressesLivraison?: JsonFilter;
  compagnie?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  profil?: StringNullableFilter;
};
