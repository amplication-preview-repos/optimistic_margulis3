import { Rapport as TRapport } from "../api/rapport/Rapport";

export const RAPPORT_TITLE_FIELD = "typeRapport";

export const RapportTitle = (record: TRapport): string => {
  return record.typeRapport?.toString() || String(record.id);
};
