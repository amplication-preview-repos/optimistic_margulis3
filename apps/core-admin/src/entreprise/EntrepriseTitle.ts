import { Entreprise as TEntreprise } from "../api/entreprise/Entreprise";

export const ENTREPRISE_TITLE_FIELD = "nom";

export const EntrepriseTitle = (record: TEntreprise): string => {
  return record.nom?.toString() || String(record.id);
};
