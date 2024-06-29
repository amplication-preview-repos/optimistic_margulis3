import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UniteProduitWhereInput = {
  id?: StringFilter;
  libelle?: StringNullableFilter;
  symbole?: StringNullableFilter;
};
