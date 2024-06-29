import { CategorieProduitWhereInput } from "./CategorieProduitWhereInput";
import { CategorieProduitOrderByInput } from "./CategorieProduitOrderByInput";

export type CategorieProduitFindManyArgs = {
  where?: CategorieProduitWhereInput;
  orderBy?: Array<CategorieProduitOrderByInput>;
  skip?: number;
  take?: number;
};
