import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "compagnie";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.compagnie?.toString() || String(record.id);
};
