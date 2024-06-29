import { UniteProduitWhereInput } from "./UniteProduitWhereInput";
import { UniteProduitOrderByInput } from "./UniteProduitOrderByInput";

export type UniteProduitFindManyArgs = {
  where?: UniteProduitWhereInput;
  orderBy?: Array<UniteProduitOrderByInput>;
  skip?: number;
  take?: number;
};
