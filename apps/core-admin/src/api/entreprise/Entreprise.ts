import { JsonValue } from "type-fest";

export type Entreprise = {
  adressesLivraison: JsonValue;
  createdAt: Date;
  id: string;
  logo: JsonValue;
  margeDette: number | null;
  nom: string | null;
  signatureNumerique: string | null;
  soldeClient: number | null;
  updatedAt: Date;
};
