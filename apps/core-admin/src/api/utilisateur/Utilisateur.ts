import { JsonValue } from "type-fest";

export type Utilisateur = {
  adressesLivraison: JsonValue;
  compagnie: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  motDePasse: string | null;
  nom: string | null;
  profil: string | null;
  updatedAt: Date;
};
