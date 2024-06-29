import { ConditionnementProduit as TConditionnementProduit } from "../api/conditionnementProduit/ConditionnementProduit";

export const CONDITIONNEMENTPRODUIT_TITLE_FIELD = "id";

export const ConditionnementProduitTitle = (
  record: TConditionnementProduit
): string => {
  return record.id?.toString() || String(record.id);
};
