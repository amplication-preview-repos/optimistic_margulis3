import { EntrepriseWhereInput } from "./EntrepriseWhereInput";
import { EntrepriseOrderByInput } from "./EntrepriseOrderByInput";

export type EntrepriseFindManyArgs = {
  where?: EntrepriseWhereInput;
  orderBy?: Array<EntrepriseOrderByInput>;
  skip?: number;
  take?: number;
};
