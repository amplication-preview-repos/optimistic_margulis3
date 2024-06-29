import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CrudLogWhereInput = {
  action?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  entite?: StringNullableFilter;
  id?: StringFilter;
};
