import { CategorieProduit as TCategorieProduit } from "../api/categorieProduit/CategorieProduit";

export const CATEGORIEPRODUIT_TITLE_FIELD = "id";

export const CategorieProduitTitle = (record: TCategorieProduit): string => {
  return record.id?.toString() || String(record.id);
};
