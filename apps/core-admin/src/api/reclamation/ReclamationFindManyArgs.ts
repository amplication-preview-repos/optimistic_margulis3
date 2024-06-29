import { ReclamationWhereInput } from "./ReclamationWhereInput";
import { ReclamationOrderByInput } from "./ReclamationOrderByInput";

export type ReclamationFindManyArgs = {
  where?: ReclamationWhereInput;
  orderBy?: Array<ReclamationOrderByInput>;
  skip?: number;
  take?: number;
};
