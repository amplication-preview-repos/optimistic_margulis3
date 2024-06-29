import { InputJsonValue } from "../../types";

export type UtilisateurCreateInput = {
  adressesLivraison?: InputJsonValue;
  compagnie?: string | null;
  email?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  profil?: string | null;
};
