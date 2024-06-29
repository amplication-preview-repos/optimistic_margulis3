import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EntrepriseWhereInput = {
  adressesLivraison?: JsonFilter;
  id?: StringFilter;
  logo?: JsonFilter;
  margeDette?: FloatNullableFilter;
  nom?: StringNullableFilter;
  signatureNumerique?: StringNullableFilter;
  soldeClient?: FloatNullableFilter;
};
