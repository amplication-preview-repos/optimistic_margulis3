import { OffrePrix as TOffrePrix } from "../api/offrePrix/OffrePrix";

export const OFFREPRIX_TITLE_FIELD = "id";

export const OffrePrixTitle = (record: TOffrePrix): string => {
  return record.id?.toString() || String(record.id);
};
