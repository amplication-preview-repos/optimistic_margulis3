import { CrudLogWhereInput } from "./CrudLogWhereInput";
import { CrudLogOrderByInput } from "./CrudLogOrderByInput";

export type CrudLogFindManyArgs = {
  where?: CrudLogWhereInput;
  orderBy?: Array<CrudLogOrderByInput>;
  skip?: number;
  take?: number;
};
