import { InputJsonValue } from "../../types";

export type UtilisateurUpdateInput = {
  adressesLivraison?: InputJsonValue;
  compagnie?: string | null;
  email?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  profil?: string | null;
};
