import { RapportWhereInput } from "./RapportWhereInput";
import { RapportOrderByInput } from "./RapportOrderByInput";

export type RapportFindManyArgs = {
  where?: RapportWhereInput;
  orderBy?: Array<RapportOrderByInput>;
  skip?: number;
  take?: number;
};
