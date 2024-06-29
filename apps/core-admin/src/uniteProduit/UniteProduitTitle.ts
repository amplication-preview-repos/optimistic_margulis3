import { UniteProduit as TUniteProduit } from "../api/uniteProduit/UniteProduit";

export const UNITEPRODUIT_TITLE_FIELD = "libelle";

export const UniteProduitTitle = (record: TUniteProduit): string => {
  return record.libelle?.toString() || String(record.id);
};
