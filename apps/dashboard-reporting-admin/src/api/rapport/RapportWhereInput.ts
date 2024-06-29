import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RapportWhereInput = {
  contenu?: JsonFilter;
  dateRapport?: DateTimeNullableFilter;
  id?: StringFilter;
  typeRapport?: StringNullableFilter;
};
