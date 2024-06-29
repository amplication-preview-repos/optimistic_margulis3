import { InputJsonValue } from "../../types";

export type EntrepriseCreateInput = {
  adressesLivraison?: InputJsonValue;
  logo?: InputJsonValue;
  margeDette?: number | null;
  nom?: string | null;
  signatureNumerique?: string | null;
  soldeClient?: number | null;
};
