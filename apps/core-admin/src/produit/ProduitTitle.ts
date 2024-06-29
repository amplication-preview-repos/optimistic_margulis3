import { Produit as TProduit } from "../api/produit/Produit";

export const PRODUIT_TITLE_FIELD = "nom";

export const ProduitTitle = (record: TProduit): string => {
  return record.nom?.toString() || String(record.id);
};
