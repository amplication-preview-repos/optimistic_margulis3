import { SortOrder } from "../../util/SortOrder";

export type CrudLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  entite?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
