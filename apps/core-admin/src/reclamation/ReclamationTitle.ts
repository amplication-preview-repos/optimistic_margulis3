import { Reclamation as TReclamation } from "../api/reclamation/Reclamation";

export const RECLAMATION_TITLE_FIELD = "id";

export const ReclamationTitle = (record: TReclamation): string => {
  return record.id?.toString() || String(record.id);
};
