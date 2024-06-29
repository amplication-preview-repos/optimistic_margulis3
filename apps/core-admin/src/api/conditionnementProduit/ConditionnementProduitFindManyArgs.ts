import { ConditionnementProduitWhereInput } from "./ConditionnementProduitWhereInput";
import { ConditionnementProduitOrderByInput } from "./ConditionnementProduitOrderByInput";

export type ConditionnementProduitFindManyArgs = {
  where?: ConditionnementProduitWhereInput;
  orderBy?: Array<ConditionnementProduitOrderByInput>;
  skip?: number;
  take?: number;
};
